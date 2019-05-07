import {IDictionary } from "./dictionary.interface";

export class DictionaryHelper {

	public static for<T>(source: IDictionary<T>): IDictionaryHelperOf<T> {
		return new DictionaryHelperOf(source);
	}
}

export interface IDictionaryHelperOf<T> {

	getOrAdd(key: string, newValueFactory: (key: string) => T): T

}

class DictionaryHelperOf<T> implements IDictionaryHelperOf<T> {

	public constructor(private readonly _source: IDictionary<T>) {
	}

	public getOrAdd(key: string, newValueFactory: (key: string) => T): T {
		let value = this._source[key];
		if (value === undefined)
			value = (this._source[key] = newValueFactory(key));
		return value;
	}

}