import { Component, OnInit, ViewChild, ElementRef, Input, Inject, ChangeDetectionStrategy } from '@angular/core';
import { OrisValueRepositoryProvider } from '../oris-client/oris-value-repository/oris-value-repository.service';
import { IOrisValueRepository } from '../oris-client/oris-value-repository/oris-value-repository.interface';
import { Subscription } from 'rxjs';
import { OrisValue } from '../oris-client/oris-value.model';

@Component({
  selector: 'app-fan-canvas',
  templateUrl: './fan-canvas.component.html',
  styleUrls: ['./fan-canvas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FanCanvasComponent implements OnInit {

	private _spin: boolean = false;
	private _spinSubscription: Subscription | null = null;
	private _image: HTMLImageElement = new Image();
	private _angle: number = 0;
	private _mnemonic: string | null = null;

	@ViewChild("canvas") public canvas: ElementRef<HTMLCanvasElement> | undefined;

  	constructor(@Inject(OrisValueRepositoryProvider) private readonly _orisValueRepository: IOrisValueRepository) {
	}

	ngOnInit() {
		const that = this;
		this._image.onload = () => this.onImageLoad(that);
		this._image.src = "/assets/img/fan.png";
		requestAnimationFrame(() => this.draw(that));
	}

	public get mnemonic(): string | null {
		return this._mnemonic;
	}

	@Input()
	public set mnemonic(value: string | null) {
		if (value !== this._mnemonic) {
			if (this._spinSubscription) {
				this._spinSubscription.unsubscribe();
				this._spinSubscription = null;
			}

			if (value) {
				this._spinSubscription = this._orisValueRepository
					.getValue(value)
					.subscribe(nextValue => this.onNextSpinValue(nextValue));
			}

			this._mnemonic = value;
		}
	}

	private onNextSpinValue(spinValue: OrisValue) {
		this._spin = spinValue.asBoolean() === true;
	}

	private onImageLoad(that: FanCanvasComponent): void {
		const canvas = that.canvas;
		if (!canvas)
			return;

		const canvasElement = canvas.nativeElement;
		const ctx = canvasElement.getContext("2d");
		if (!ctx)
			return;

		const image = that._image;
		canvasElement.width = image.width;
		canvasElement.height = image.height;
		ctx.drawImage(image, 0, 0);
	}

	private draw(that: FanCanvasComponent): void {
		const canvas = that.canvas;
		if (!canvas)
			return;

		if (!this._spin){
			requestAnimationFrame(() => that.draw(that));
			return;
		}

		const canvasElement = canvas.nativeElement;
		const ctx = canvasElement.getContext("2d");
		if (!ctx)
			return;

		const image = that._image;
		ctx.save();
		ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
		ctx.translate(canvasElement.width / 2, canvasElement.height / 2);
		ctx.rotate(Math.PI / 180 * ((that._angle += 5)));
		ctx.translate(-(canvasElement.width / 2), -(canvasElement.height / 2));
		ctx.drawImage(image, canvasElement.width / 2 - image.width / 2, canvasElement.height / 2 - image.height / 2);
		ctx.restore();

		requestAnimationFrame(() => that.draw(that));
	}

}
