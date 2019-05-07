import { IDictionary } from '../dictionary/dictionary.interface';

declare function importScripts(...urls: string[]): void;
declare const self: Worker;

export interface IOrisValueUpdateMessage {
	addedMnemonics?: string[];
	updatedPoints?: IDictionary<IVegarwPointInfo>;
	updatedValues?: IDictionary<string>;
}

export interface IOrisValueUpdateConfig {
	selfOrigin: string;
	host: string;
	port: number;
	userName: string;
	password: string;
	delayInMs: number
}

interface IVegarwPointDto {
	id0: number; // id
	id1: string; // label
	id16: string; // unit
	id23: string; // value
	id27: string; // mnemonic
}

export interface IVegarwPointInfo {
	id: number;
	value: string;
	mnemonic: string
	unit: string;
	label: string;
}

interface IOrisValueUpdater {
	_isStarted: boolean;
	_pointByMnemonic: IDictionary<IVegarwPointInfo | null>;
	_authTokenCache: string | null;
	loopUpdateAsync: () => Promise<void>;
	ensureAuthAsync: () => Promise<string>;
	readValues: (points: IVegarwPointInfo[]) => void;
	fetchAsync: (authToken: string) => Promise<IVegarwPointInfo[]>;
	fromDto: (dto: IVegarwPointDto) => IVegarwPointInfo;
	onLeapEnd: () => void;
}

export class OrisValueUpdater {

	public static run(config: IOrisValueUpdateConfig): void {
		if (typeof Promise !== "function")
			importScripts(`${config.selfOrigin}/scripts/es6-promise.auto.min.js`);

		const that: IOrisValueUpdater = {
			_isStarted: true,
			_pointByMnemonic: {},
			_authTokenCache: null,

			onLeapEnd: () => {
				if (that._isStarted)
					setTimeout(that.loopUpdateAsync, config.delayInMs);
			},

			loopUpdateAsync: () => {
				return that.ensureAuthAsync()
					.then(authToken => that.fetchAsync(authToken))
					.then(points => that.readValues(points))
					.then(that.onLeapEnd) // Code redundancy: Promise.prototype.finally is broken in various browsers
					.catch((e) => {
						console.warn(`[OrisValueUpdater] ${e}`)
						that._authTokenCache = null;
						that.onLeapEnd(); // Code.redundancy: Promise.prototype.finally is broken in various browsers
					})
			},

			ensureAuthAsync: () => {
				if (that._authTokenCache)
					return Promise.resolve(that._authTokenCache);
				
				return new Promise((resolve, reject) => {
					const xhr = new XMLHttpRequest();
					xhr.open("GET", `http://${config.host}:${config.port}/form0001?user=${config.userName}&pass=${config.password}&xml=true`, false);
					xhr.onload = () => {
						if (xhr.status !== 200) {
							reject(`Authentication failed: ${xhr.statusText}.`);
							return;
						}
						
						const match = xhr.responseText.match('id="(.+)"');
						if (match) {
							that._authTokenCache = match[1];
							resolve(match[1]);
						}
						else
							reject("Authentication failed: couldn't parse token from response.");
					};
					xhr.onerror = () => reject(xhr.statusText);
					xhr.send();
				});
			},

			fetchAsync: (authToken: string) => {
				return new Promise((resolve, reject) => {
					const xhr = new XMLHttpRequest();
					xhr.open("GET", `http://${config.host}:${config.port}/${authToken}/doc_vegarw/4_Acces/Parametrage/vegarw_points_gestion.ini?json=optim&col=id0,id1,id16,id23,id27`, false);
					xhr.onload = () => {
						if (xhr.status !== 200) {
							reject(`Couldn't fetch points: ${xhr.statusText}.`);
							return;
						}

						const json = JSON.parse(xhr.responseText);
						const points: IVegarwPointDto[] = json.vegarw_pointss;
						const infos = points
						.slice(1, points.length - 1) // removes first and last items
						.map(that.fromDto);
						resolve(infos);
					}
					xhr.onerror = () => reject(`Couldn't fetch points: ${xhr.statusText}.`);
					xhr.send();
				});
			},

			readValues: (points: IVegarwPointInfo[]) => {
				const updatedPoints: IDictionary<IVegarwPointInfo> = {};
				points.forEach(point => {
					const oldPoint = that._pointByMnemonic[point.mnemonic];
					if (oldPoint === undefined
					|| oldPoint !== null && oldPoint.value === point.value)
						return;

					that._pointByMnemonic[point.mnemonic] = point;
					updatedPoints[point.mnemonic] = point;
				});

				if (Object.keys(updatedPoints).length > 0) {
					const message: IOrisValueUpdateMessage = {
						updatedPoints: updatedPoints
					};
					self.postMessage(message);
				}
			},
			
			fromDto: (dto: IVegarwPointDto) => {
				return {
					id: dto.id0,
					value: dto.id23,
					mnemonic: dto.id27,
					label: dto.id1,
					unit: dto.id16
				};
			}
		};

		self.addEventListener("message", (e: { data: IOrisValueUpdateMessage }) => {
			const message = e.data;
		
			if (message.addedMnemonics) {
				message.addedMnemonics.forEach(mnemonic => {
					if (!that._pointByMnemonic.hasOwnProperty(mnemonic))
						that._pointByMnemonic[mnemonic] = null;
				});
			}

			if (message.updatedValues) {
				const valueById: IDictionary<string> = { };
				for (const mnemonic in message.updatedValues) {
					const point = that._pointByMnemonic[mnemonic];
					if (point)
						valueById[point.id] = message.updatedValues![mnemonic];
				}

				if (Object.keys(valueById).length > 0) {
					that.ensureAuthAsync()
					.then(authToken => {
						const xhr = new XMLHttpRequest();
						xhr.open("GET", `http://${config.host}:${config.port}/${authToken}/doc_vegarw/vegarw.xxx?a=w&p=${Object.keys(valueById).join()}&v=${Object.values(valueById).join()}`, false);
						xhr.onload = () => {
							if (xhr.status !== 200)
							console.warn(`[OrisValueUpdater] Couldn't send points: ${xhr.statusText}.`);
						}
						xhr.onerror = () => console.warn(`[OrisValueUpdater] Couldn't send points: ${xhr.statusText}.`);
						xhr.send();
					});
				}
			}
		});
		
		that.loopUpdateAsync();
	}


}