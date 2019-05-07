import { ComponentFactory } from '@angular/core';

import { IInstance } from './instance.interface';

export class InsertInfo {

	public constructor(
		public readonly factory: ComponentFactory<{}>,
		public readonly target: string,
		public readonly x: number,
		public readonly y: number) {
	}

}