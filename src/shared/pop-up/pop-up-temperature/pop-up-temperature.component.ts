import { Component, OnInit, ChangeDetectionStrategy, Input, Inject, ViewChild, HostBinding, Output, EventEmitter, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { OrisValueRepositoryProvider } from '../../oris-client/oris-value-repository/oris-value-repository.service';
import { OrisValue } from '../../oris-client/oris-value.model';
import { ScriptService } from '../../script/script.service';
import { IOrisValueRepository } from '../../oris-client/oris-value-repository/oris-value-repository.interface';
import { Constants } from 'src/shared/constants';
import { IDictionary } from 'src/shared/dictionary/dictionary.interface';

declare var AdobeAn: any;

@Component({
	selector: 'app-pop-up-temperature',
	templateUrl: './pop-up-temperature.component.html',
	styleUrls: ['./pop-up-temperature.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ScriptService]
})

export class PopUpTemperatureComponent implements OnInit, OnDestroy {
	private _mnemonicRoot: string | null = null;
	private readonly _orisValueSubscriptions: Subscription[] = [];
	private readonly _orisValueByShortMnemonic: IDictionary<OrisValue> = {};
	private _title: string = "";
	private _countryName: string = "";
	private _anim: any;
	@ViewChild("canvas") private readonly _canvas: ElementRef | undefined;
	private _initialZIndex: number | string | null = null;
	@HostBinding("style.z-index") _zIndex: number | string | null = null;
	private _isVisible: boolean = false;

	@Output() public closed: EventEmitter<void> = new EventEmitter();

	constructor(
		private readonly _scriptService: ScriptService,
		@Inject(OrisValueRepositoryProvider) private readonly _orisValueRepository: IOrisValueRepository,
		private readonly _changeDetectorRef: ChangeDetectorRef) {
	}

	async ngOnInit() {
		await this._scriptService.load("createjs")
		await this._scriptService.load("pop-up-temperature");

		var comp = AdobeAn.getComposition("D6624C4551F316468B501D5D33AE6DA0");
		this._anim = this.anim_handleComplete(comp);
		this.tryUpdateAnim();
	}

	ngOnDestroy(): void {
		this.disposeOrisValueSubscriptions();
	}

	public get mnemonicRoot(): string | null {
		return this._mnemonicRoot;
	}
	@Input()
	public set mnemonicRoot(value: string | null) {
		if (this._mnemonicRoot !== value) {
			this.disposeOrisValueSubscriptions();
			if (value)
				this.initOrisValueSubscriptions(value);
				
			this._mnemonicRoot = value;
			this._changeDetectorRef.markForCheck();
		}
	}

	private disposeOrisValueSubscriptions(): void {
		const subscriptions = this._orisValueSubscriptions;
		subscriptions.forEach(s => s.unsubscribe());
		subscriptions.splice(0, subscriptions.length); // clears the array
	}

	private initOrisValueSubscriptions(rootMnemonic: string): void {
		const shortMnemonics = [ "MesCor", "Offset" ];
		shortMnemonics.forEach(shortMnemonic => {
			const fullMnemonic: string = `${rootMnemonic}.${shortMnemonic}`;
			const orisValueObservable: Observable<OrisValue> = this._orisValueRepository.getValue(fullMnemonic);
			const subscription: Subscription = orisValueObservable.subscribe(nextValue => this.onNextOrisValue(shortMnemonic, nextValue));
			this._orisValueSubscriptions.push(subscription);
		})
	}

	private onNextOrisValue(shortMnemonic: string, value: OrisValue) {
		this._orisValueByShortMnemonic[shortMnemonic] = value;
		this.tryUpdateAnim();
	}

	private getOrisValue(shortMnemonic: string) {
		return this._orisValueByShortMnemonic[shortMnemonic] || OrisValue.empty;
	}

	private tryUpdateAnim(): void {
		const anim = this._anim;
		if (!anim)
			return;

		// anim.sPays.text = this._countryName;
		anim.sTitre.text = this._title;
		

		const temperatureValue = this.getOrisValue("MesCor");
		anim.mcTM_T.sText.text = `${temperatureValue.asNumber() || ""} ` + temperatureValue.unit;

		const pressureValue = this.getOrisValue("Offset");
		anim.mcTM_T2.sText.text = `${pressureValue.asNumber() || ""} ` + pressureValue.unit;

		anim.getStage().update();
	}

	public get isVisible(): boolean {
		return this._isVisible;
	}
	@Input()
	public set isVisible(value: boolean) {
		if (value === this._isVisible)
			return;

		if (value) {
			this._initialZIndex = this._zIndex;
			this._zIndex = Constants.ZIndexMaxValue;
			this._isVisible = true;
		}
		else {
			this._isVisible = false;
			this._zIndex = this._initialZIndex;
			this.closed.emit(); // émission de l'event onClosed
		}

		this._changeDetectorRef.markForCheck(); // demande le refresh du composant par Angular (requis car en mode "ChangeDetectionStrategy.OnPush" pour opti perf)
	}

	public get countryName(): string {
		return this._countryName;
	}
	@Input()
	public set countryName(value: string) {
		if (this._countryName !== value) {
			this._countryName = value;
			this.tryUpdateAnim();
		}
	}

	public get title(): string {
		return this._title;
	}
	@Input()
	public set title(value: string) {
		if (this._title !== value) {
			this._title = value;
			this.tryUpdateAnim();
		}
	}

	private anim_handleComplete(comp: any) {
		if (!this._canvas)
			return;

		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib = comp.getLibrary();
		const exportRoot = new lib.popuptemperature();
		const stage = new lib.Stage(this._canvas.nativeElement);
		const fnStartAnimation = function () {
			stage.addChild(exportRoot);
			stage.update(); // ensures dispatch of a first tick event among children
		}
		AdobeAn.compositionLoaded(lib.properties.id);
		fnStartAnimation();

		return exportRoot;
	}

}
