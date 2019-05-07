export class OrisValue {

	public static readonly empty: OrisValue = new OrisValue("", "", "");

	private _booleanValue: boolean | null | undefined;
	private _numberValue: number | null | undefined;

	constructor(public readonly raw: string, public readonly unit: string, public readonly label: string) {
	}

	public asString(): string {
		return this.raw;
	}

	public asBoolean(): boolean | null {
		return this._booleanValue !== undefined
			? this._booleanValue
			: (this._booleanValue = this.tryGetBoolean());
	}

	public asNumber(): number | null {
		return this._numberValue !== undefined
			? this._numberValue
			: (this._numberValue = this.tryGetNumber());
	}

	private tryGetBoolean(): boolean | null {
		switch (this.raw) {

			case "false":
			case "0":
				return false;

			case "true":
			case "1":
				return true;

			default:
				return null;
		}
	}

	private tryGetNumber(): number | null {
		if (!this.raw)
			return null;

		const n = Number(this.raw);
		return isNaN(n) ? null : n;
	}

}
