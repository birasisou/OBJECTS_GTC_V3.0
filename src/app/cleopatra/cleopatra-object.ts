import { ViewContainerRef, Input, ComponentFactory, OnDestroy } from '@angular/core';
import { CleopatraService } from './cleopatra.service';
import { Subscription } from 'rxjs';
import { IInstance } from './instance.interface';
import { InsertInfo } from './insert-info';

export abstract class CleopatraObject implements OnDestroy {

	private _insertedItemSub: Subscription | null = null;

	protected constructor(
		private readonly _viewContainerRef: ViewContainerRef,
		private readonly _cleopatraService: CleopatraService) {
			
		this.onInsertedItem = this.onInsertedItem.bind(this);
		this._insertedItemSub = _cleopatraService.insertedItem$.subscribe(this.onInsertedItem);
		_cleopatraService.subscribers.push(this);
	}

	ngOnDestroy() {
		if (this._insertedItemSub)
			this._insertedItemSub.unsubscribe();
	}

	@Input("cleopatra-instance")
	public instance: IInstance | undefined | null;

	private onInsertedItem(insertInfo: InsertInfo) {
		const instance = this.instance;
		if (!instance || typeof instance.id !== "string" || !instance.id)
			return;

		if (insertInfo.target === instance.id)
			this._viewContainerRef.createComponent(insertInfo.factory);
	}

}