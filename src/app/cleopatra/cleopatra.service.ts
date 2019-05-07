import { Injectable, InjectionToken, ComponentFactory } from "@angular/core";
import { Observable, Subject } from 'rxjs';

import { CleopatraObject } from './cleopatra-object';
import { InsertInfo } from './insert-info';

export const CleopatraServiceProvider = new InjectionToken(
	"CleopatraServiceProvider",
	{ providedIn: "root", factory: () => new CleopatraService() }
);

@Injectable({
	providedIn: "root"
})
export class CleopatraService {

	private readonly _subscribers: CleopatraObject[] = [];
	private readonly _insertedItemSource = new Subject<InsertInfo>();

	public get insertedItem$(): Observable<InsertInfo> {
		return this._insertedItemSource.asObservable();
	}

	public get subscribers(): CleopatraObject[] {
		return this._subscribers;
	}

	public insertItem(item: InsertInfo) {
		this._insertedItemSource.next(item);
	}

}