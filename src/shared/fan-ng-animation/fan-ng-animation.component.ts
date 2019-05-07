import { Component, OnInit, Input, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';
import { FanState } from './fan-state';
import { OrisValueRepositoryProvider } from '../oris-client/oris-value-repository/oris-value-repository.service';
import { IOrisValueRepository } from '../oris-client/oris-value-repository/oris-value-repository.interface';
import { Subscription } from 'rxjs';
import { OrisValue } from '../oris-client/oris-value.model';

@Component({
	selector: 'app-fan-ng-animation',
	templateUrl: './fan-ng-animation.component.html',
	styleUrls: ['./fan-ng-animation.component.css'],
		animations: [
			trigger("rotate", [
				state(FanState.off, style({ transform: "rotate(0deg)" })),
				state(FanState.on, style({ transform: "rotate(360deg)" })),
				state(FanState.slowDown, style({ transform: "rotate(720deg)" })),
				transition("loop => on", animate("1000ms")),
				transition("off => on", animate("1500ms ease-in")),
				transition("on => slowDown", animate("2000ms ease-out"))
			])
		],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FanNgAnimationComponent implements OnInit {

	private _spin: boolean = false;
	private _spinSubscription: Subscription | null = null;
	private _mnemonic: string | null = null;

	public fanState: string = FanState.off;

	constructor(
		@Inject(OrisValueRepositoryProvider) private readonly _orisValueRepository: IOrisValueRepository,
		private readonly _changeDetectorRef: ChangeDetectorRef) {
	}

	ngOnInit() {
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

		if (this._spin)
			this.rotate();
	}

	private rotate() {
		setTimeout(() => {
			this.fanState = this.fanState === FanState.on ? FanState.loop : FanState.on;
			this._changeDetectorRef.markForCheck();
		}, 0);
	}
	
	private slowDown() {
		setTimeout(() => {
			this.fanState = FanState.slowDown;
			this._changeDetectorRef.markForCheck();
		}, 0);
	}
	
	public onRotated(e: AnimationEvent): void {
		if (e.toState === FanState.off)
			return;

		if (!this._spin) {
			switch (e.toState) {
				
				case FanState.loop:
				case FanState.on:
					this.slowDown();
					break;
				
				case FanState.slowDown:
					this.fanState = FanState.off;
			}
		}
		else if (e.toState === this.fanState)
			this.rotate();
	}

}
