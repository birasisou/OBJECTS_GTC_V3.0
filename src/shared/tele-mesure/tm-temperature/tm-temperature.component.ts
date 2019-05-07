import { Component, OnInit, ChangeDetectionStrategy, Input, Inject, ViewChild, HostBinding, ElementRef, ChangeDetectorRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { OrisValueRepositoryProvider } from '../../oris-client/oris-value-repository/oris-value-repository.service';
import { OrisValue } from '../../oris-client/oris-value.model';
import { ScriptService } from '../../script/script.service';
import { IOrisValueRepository } from '../../oris-client/oris-value-repository/oris-value-repository.interface';
import { Constants } from 'src/shared/constants';
import { PopUpTemperatureComponent } from 'src/shared/pop-up/pop-up-temperature/pop-up-temperature.component';
import { CleopatraObject } from 'src/app/cleopatra/cleopatra-object';
import { CleopatraServiceProvider, CleopatraService } from 'src/app/cleopatra/cleopatra.service';

declare var AdobeAn: any;
declare var createjs: any;

@Component({
	selector: 'app-tm-temperature',
	templateUrl: './tm-temperature.component.html',
	styleUrls: ['./tm-temperature.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ScriptService]
})
export class TmTemperatureComponent extends CleopatraObject implements OnInit, OnDestroy {
	private _isTooltipVisible: boolean = false;
	private _mnemonicRoot: string | null = null;
	private _temperatureSubscription: Subscription | null = null;
	private _initialZIndex: string | number | null = null;
	@HostBinding("style.z-index") private _zIndex: string | number | null = null;
	@ViewChild("popUp") private readonly _popUp: PopUpTemperatureComponent | undefined;
	@ViewChild("temperatureCanvas") private readonly _temperatureCanvas: ElementRef | undefined;
	private _temperatureAnim: any;
		
	constructor(
		private readonly _scriptService: ScriptService,
		@Inject(OrisValueRepositoryProvider) private readonly _orisValueRepository: IOrisValueRepository,
		private readonly _changeDetectorRef: ChangeDetectorRef,
		viewContainerRef: ViewContainerRef,
		cleopatraService: CleopatraService) {
			super(viewContainerRef, cleopatraService);
	}

	async ngOnInit() {
		await this._scriptService.load("createjs")
		await this.initTemperatureAnimAsync();
		this.tryUpdateAnim();
	}

	ngOnDestroy(): void {
		if (this._temperatureSubscription)
			this._temperatureSubscription.unsubscribe();
	}

	private async initTemperatureAnimAsync(): Promise<void> {
		await this._scriptService.load("tm-temperature");
		const comp = AdobeAn.getComposition("D6624C4551F316468B501D5D33AE6DA0");
		this._temperatureAnim = this.temperatureAnim_handleComplete({}, comp);
	}

	public temperatureValue: OrisValue = OrisValue.empty;

	public get mnemonicRoot(): string | null {
		return this._mnemonicRoot;
	}
	@Input()
	public set mnemonicRoot(value: string | null) {
		if (this._mnemonicRoot === value)
			return;

		if (this._temperatureSubscription)
		this._temperatureSubscription.unsubscribe();

		if (value) {
			const temperatureMnemonic = this.getTemperatureMnemonicCore(value);
			this._temperatureSubscription = this._orisValueRepository
				.getValue(temperatureMnemonic)
				.subscribe(nextValue => this.onNextTemperatureValue(nextValue));

			const pressureMnemonic = this.getPressureMnemonicCore(value);
			this.pressureValueObservable = this._orisValueRepository.getValue(pressureMnemonic);
		}

		this._mnemonicRoot = value;
		this._changeDetectorRef.markForCheck();
	}

	private getTemperatureMnemonicCore(mnemonicRoot: string): string {
		return `${mnemonicRoot}.MesCor`;
	}

	public get temperatureMnemonic(): string | null {
		return this.mnemonicRoot ? this.getTemperatureMnemonicCore(this.mnemonicRoot) : null;
	}

	private getPressureMnemonicCore(mnemonicRoot: string): string {
		return `${mnemonicRoot}.Offset`;
	}

	public get pressureMnemonic(): string | null {
		return this.mnemonicRoot ? this.getPressureMnemonicCore(this.mnemonicRoot) : null;
	}

	public get isTooltipVisible(): boolean {
		return this._isTooltipVisible;
	}
	public set isTooltipVisible(value: boolean) {
		if (this._isTooltipVisible !== value) {
			if (value)
				this.bringToFrontIfNeeded();
			else
				this.resetZIndexIfNeeded();

			this._isTooltipVisible = value;
		}
	}

	public pressureValueObservable: Observable<OrisValue> | null = null

	// proxy vers la popUp enfant (nécessaire pour transmettre les changements de valeur)
	public get countryName(): string {
		return this._popUp ? this._popUp.countryName : "";
	}
	@Input()
	public set countryName(value: string) {
		if (this._popUp)
			this._popUp.countryName = value;
	}

	// proxy vers la popUp enfant (nécessaire pour transmettre les changements de valeur)
	public get popUpTitle(): string {
		return this._popUp ? this._popUp.title : "";
	}
	@Input()
	public set popUpTitle(value: string) {
		if (this._popUp) {
			this._popUp.title = value;
		}
	}

	private onNextTemperatureValue(value: OrisValue) {
		this.temperatureValue = value;
		this.tryUpdateAnim();
		this._changeDetectorRef.markForCheck();
	}

	private tryUpdateAnim(): void {
		const anim = this._temperatureAnim;
		if (!anim)
			return;

		const value = this.temperatureValue;
		anim.mcTM.sText.text = `${value.asNumber() || ""} ` + value.unit;
		// anim.getStage().update();// ERREUR DANS MOZILLA
	}

	public showPopUp(): void {
		if (!this._popUp || this._popUp.isVisible)
			return;

	// le z-index de l'objet lui-même doit être changé pour que son pop-up soit au 1er plan (cf. "contextes d'empilement z-index")
	this.bringToFrontIfNeeded();
	this._popUp.isVisible = true;
	}

	public popUp_onClosed(): void {
		this.resetZIndexIfNeeded();
	}

	/* TODO extraire une classe de ce champ et ces deux méthodes */
	private _frontElementCount: number = 0

	private bringToFrontIfNeeded(): void {
		if (this._frontElementCount === 0) {
			this._initialZIndex = this._zIndex;
			this._zIndex = Constants.ZIndexMaxValue;
		}
		this._frontElementCount++;
	}

	private resetZIndexIfNeeded(): void {
		this._frontElementCount--;
		if (this._frontElementCount === 0)
			this._zIndex = this._initialZIndex;
	}

	private temperatureAnim_handleComplete(evt: any, comp: any): any {
		if (!this._temperatureCanvas)
			return;

		var lib = comp.getLibrary();
		var ss = comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		var i;
		for (i = 0; i < ssMetadata.length; i++)
			ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })

		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib = comp.getLibrary();
		const exportRoot = new lib.tmtemperature();
		const stage = new lib.Stage(this._temperatureCanvas.nativeElement);
		const fnStartAnimation = function () {
			stage.addChild(exportRoot);
			stage.update(); // ensures dispatch of a first tick event among children
		}
		AdobeAn.compositionLoaded(lib.properties.id);
		fnStartAnimation();

		return exportRoot;
	}

}
