import { Component, OnInit, Input, Inject } from '@angular/core';
import { OrisValueRepositoryProvider } from '../oris-client/oris-value-repository/oris-value-repository.service';
import { IOrisValueRepository } from '../oris-client/oris-value-repository/oris-value-repository.interface';
import { IDictionary } from '../dictionary/dictionary.interface';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  	constructor(@Inject(OrisValueRepositoryProvider) private readonly _orisValueRepository: IOrisValueRepository) { }

	ngOnInit() {
	}

	@Input()
	public mnemonic: string | null = null;

	@Input()
	public value: string | null = null;

	@Input()
	public content: string | null = null;

	public onClick(): void {
		if (this.mnemonic && this.value) {
			const valueByMnemonic: IDictionary<string> = { };
			valueByMnemonic[this.mnemonic] = this.value;
			this._orisValueRepository.beginSetValues(valueByMnemonic);
		}
	}

	public isVisible(): boolean {
		return true;
		// return this.value !== this._orisValueRepository.getRaw(this.mnemonic);
	}

}
