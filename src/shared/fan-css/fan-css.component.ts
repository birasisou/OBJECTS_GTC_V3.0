import { Component, OnInit, Input, Inject, ChangeDetectionStrategy } from '@angular/core';
import { OrisValueRepositoryProvider } from '../oris-client/oris-value-repository/oris-value-repository.service';
import { IOrisValueRepository } from '../oris-client/oris-value-repository/oris-value-repository.interface';

@Component({
	selector: 'app-fan-css',
	templateUrl: './fan-css.component.html',
	styleUrls: ['./fan-css.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FanCssComponent implements OnInit {
	
	@Input()
	public mnemonic: string | null = null;

	constructor(@Inject(OrisValueRepositoryProvider) public readonly orisValueRepository: IOrisValueRepository) {
	}

	ngOnInit() {
	}

}