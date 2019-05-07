import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-text-with-tooltip',
  templateUrl: './text-with-tooltip.component.html',
  styleUrls: ['./text-with-tooltip.component.css']
})
export class TextWithTooltipComponent implements OnInit {

	private _originalZIndex: number | string | null = null;

	constructor() { }

	ngOnInit() {
	}

	@Input()
	public content: string | null = null

	public shouldShowRectangle: boolean = false;

	@HostBinding("style.z-index")
	public zIndex: number | string | null = null;

	public onMouseenter(): void {
		this.shouldShowRectangle = true;
		this._originalZIndex = this.zIndex;
		this.zIndex = Constants.ZIndexMaxValue;
	}

	public onMouseleave(): void {
		this.shouldShowRectangle = false;
		this.zIndex = this._originalZIndex;
	}

}
