import { Component, OnInit, Renderer2, ElementRef, HostListener, ViewContainerRef, ComponentFactoryResolver, Injector, ComponentFactory, NgModule } from '@angular/core';
import { IDictionary } from 'src/shared/dictionary/dictionary.interface';
import { CleopatraService } from '../cleopatra.service';
import { CleopatraObject } from '../cleopatra-object';
import { TmTemperatureComponent } from 'src/shared/tele-mesure/tm-temperature/tm-temperature.component';
import * as objectLibrary from "../object-library";
import { DragInfo } from './drag-info';
import { IInstance } from '../instance.interface';
import { InsertInfo } from '../insert-info';

declare var CefSharp: any;

@Component({
	selector: 'cleopatra-shell',
	templateUrl: './cleopatra-shell.component.html',
	styleUrls: ['./cleopatra-shell.component.css']
})
export class CleopatraShellComponent implements OnInit {

	private _elementRefByInstanceId: IDictionary<Element> = {};
	private _instanceDragInfo: DragInfo | null = null;

	constructor(
		private readonly _elementRef: ElementRef,
		private readonly _renderer: Renderer2,
		private readonly _cleopatraService: CleopatraService,
		private readonly _componentFactoryResolver: ComponentFactoryResolver) {
	}

	public ngOnInit() {
		const hostElement: Element = this._elementRef.nativeElement;
		const instanceElements: NodeListOf<Element> = hostElement.querySelectorAll("[cleopatra-instance]");
		for	(let i = 0; i < instanceElements.length; i++) {
			const element = instanceElements[i];

			let instance: IInstance;
			try {
				instance = this.getInstanceInfo(element);
			}
			catch {
				//TODO warn
				continue;
			}

			if (typeof instance.id !== "number")
				continue; //TOOD warn

			this._elementRefByInstanceId[instance.id] = element;

			this.onInstanceDragStart = this.onInstanceDragStart.bind(this);
			element.addEventListener("dragstart", this.onInstanceDragStart, true);

			this.onInstanceMouseDown = this.onInstanceMouseDown.bind(this);
			element.addEventListener("mousedown", this.onInstanceMouseDown, true);

			const renderer: Renderer2 = this._renderer;
			renderer.setAttribute(element, "draggable", "true");
			renderer.setStyle(element, "cursor", "move");
		}
	}

	@HostListener("dragover", [ "$event" ])
	public onDragOver(e: DragEvent) {
		e.preventDefault(); 

		if (this._instanceDragInfo)
			this.move(this._instanceDragInfo, e.x, e.y);

		return false;
	}

	@HostListener("drop", [ "$event" ])
	public onDrop(e: DragEvent) {
		e.stopPropagation();
		
		if (this._instanceDragInfo)
			this.move(this._instanceDragInfo, e.x, e.y);
		else if (e.dataTransfer)
			this.tryAddInstanceAsync(e.x, e.y, e.dataTransfer)
	}

	private move(dragInfo: DragInfo, x: number, y: number): void {
		const element = dragInfo.element;
		this._renderer.setStyle(element, "left", `${x - dragInfo.offsetX}px`);
		this._renderer.setStyle(element, "top", `${y - dragInfo.offsetY}px`);
		this._renderer.setStyle(element, "position", "absolute");
	}

	private async tryAddInstanceAsync(x: number, y: number, dataTransfer: DataTransfer): Promise<void> {
		//TODO warn on failure
		const factory = this.tryGetComponentFactory(dataTransfer);
		if (!factory)
			return;

		const targetId: string | null = await this.tryGetTargetIdAsync();
		if (!targetId)
			return;

		const insertInfo = new InsertInfo(factory, targetId, x, y);
		this._cleopatraService.insertItem(insertInfo);
	}

	private tryGetComponentFactory(dataTransfer: DataTransfer): ComponentFactory<{}> | null {
		const objectName: string = dataTransfer.getData("Text");
		if (typeof objectName !== "string" || !objectName)
			return null;

		const componentType = (<any> objectLibrary)[objectName];
		return componentType
			? this._componentFactoryResolver.resolveComponentFactory(componentType)
			: null;
	}

	private async tryGetTargetIdAsync(): Promise<string | null> {
		const targetKey = "__cleopatra_target";
		await CefSharp.BindObjectAsync(targetKey);
		const targetInfo: any = (<any> window)[targetKey];
		return targetInfo && typeof targetInfo.id === "string"
			? targetInfo.id
			: null;
	}

	private onInstanceDragStart(e: Event): void {
		const currentTarget = e.currentTarget;
		if (!currentTarget || !(e instanceof DragEvent))
			return;

		this._instanceDragInfo = new DragInfo(e.offsetX, e.offsetY, currentTarget as Element);
		if (e.dataTransfer)
			e.dataTransfer.effectAllowed = "move";
	}

	private onInstanceMouseDown(e: Event): void {
		e.stopPropagation();
	}

	private getInstanceInfo(element: Element): IInstance {
		const serializedInstanceInfo = element.getAttribute("cleopatra-instance");
		if (!serializedInstanceInfo)
			throw "L'instance ne comporte aucune information.";

		let parsedData: any;
		try {
			parsedData = JSON.parse(serializedInstanceInfo);
		}
		catch (err) {
			throw "L'instance comporte des données invalides.";
		}

		if (typeof parsedData.id !== "string" || !parsedData)
			throw "L'instance ne comporte aucun d'identifiant.";

		return { id: parsedData.id };
	}

}
