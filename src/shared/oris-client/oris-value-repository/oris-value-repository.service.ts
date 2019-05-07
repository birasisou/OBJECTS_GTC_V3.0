import { Injectable, InjectionToken, inject, OnDestroy } from '@angular/core';

import { IDictionary } from '../../dictionary/dictionary.interface';
import { IOrisValueRepository } from './oris-value-repository.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { OrisValue } from '../oris-value.model';
import { WebWorkerService } from '../../web-worker.service';
import { OrisValueUpdater, IOrisValueUpdateMessage, IOrisValueUpdateConfig, IVegarwPointInfo } from '../oris-value-updater';

export const OrisValueRepositoryProvider = new InjectionToken(
	"OrisValueRepositoryServiceProvider",
	{ providedIn: "root", factory: () => new OrisValueRepositoryService(inject(WebWorkerService)) }
);

@Injectable()
class OrisValueRepositoryService implements IOrisValueRepository, OnDestroy {
	
	private readonly _dict: IDictionary<BehaviorSubject<OrisValue>> = {};
	private readonly _worker: Worker;

	constructor(private readonly _webworker: WebWorkerService) {
		const config: IOrisValueUpdateConfig = {
			selfOrigin: window.location.origin,
			userName: "enoleo",
			password: "private-9876",
			host: "192.168.1.9",
			port: 85,
			delayInMs: 1000
		};
		this._worker = this._webworker.start(OrisValueUpdater.run, config);
		this._worker.addEventListener("message", (e) => this.onWorkerMessage(e.data));
		this._worker.addEventListener("error", e => console.log(e));
	}

	ngOnDestroy(): void {
		this._worker.terminate();
	}

	public getValue(mnemonic: string): Observable<OrisValue> {
		let subject = this._dict[mnemonic];
		if (subject)
			return subject.asObservable();

		subject = new BehaviorSubject(OrisValue.empty);
		this._dict[mnemonic] = subject;
		this._worker.postMessage({ addedMnemonics: [ mnemonic ] });
		return subject.asObservable();
	}

	public beginSetValue(mnemonic: string, value: string): void {
		const updatedValues: IDictionary<string> = { };
		updatedValues[mnemonic] = value;
		const message: IOrisValueUpdateMessage = {
			updatedValues: updatedValues
		};
		this._worker.postMessage(message);
	}

	public beginSetValues(valueByMnemonic: IDictionary<string>) {
		const updatedValues: IDictionary<string> = valueByMnemonic;
		const message: IOrisValueUpdateMessage = {
			updatedValues: updatedValues
		};
		this._worker.postMessage(message);
	}
	
	private onWorkerMessage(message: IOrisValueUpdateMessage): void {
		if (message.updatedPoints) {
			for (const mnemonic in message.updatedPoints) {
				const point: IVegarwPointInfo = message.updatedPoints[mnemonic]!;
				const subject = this._dict[mnemonic];
				if (subject)
					subject.next(new OrisValue(point.value, point.unit, point.label));
			}
		}
}

}
