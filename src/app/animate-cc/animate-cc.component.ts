import { Component, OnInit, ViewContainerRef, Inject, Input } from '@angular/core';
import { CleopatraObject } from '../cleopatra/cleopatra-object';
import { CleopatraService } from '../cleopatra/cleopatra.service';

@Component({
	selector: 'app-animate-cc',
	templateUrl: './animate-cc.component.html',
	styleUrls: ['./animate-cc.component.css','../../shared/oris-gtc/tooltip.css']
})
export class AnimateCcComponent extends CleopatraObject implements OnInit {

	private readonly _countryNames: string[] = ['Chine','Mexique','Canada','Italie','Frejus','Hollande','Chine','Mexique','Canada','Italie'];

	constructor(viewContainerRef: ViewContainerRef, cleopatraService: CleopatraService) {
		super(viewContainerRef, cleopatraService);
	}

	ngOnInit() {
		console.log("");
	}

	public test() {
		alert("clicked!");
	}

}
