import { Component, OnInit, Inject } from '@angular/core';
import { OrisValueRepositoryProvider } from 'src/shared/oris-client/oris-value-repository/oris-value-repository.service';
import { IOrisValueRepository } from 'src/shared/oris-client/oris-value-repository/oris-value-repository.interface';

@Component({
  selector: 'app-fan',
  templateUrl: './fan.component.html',
  styleUrls: ['./fan.component.css']
})
export class FanComponent implements OnInit {

	constructor(@Inject(OrisValueRepositoryProvider) private readonly _orisValueRepository: IOrisValueRepository) {
	}

	ngOnInit() {
	}

}
