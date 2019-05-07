import { Observable } from 'rxjs';
import { OrisValue } from '../oris-value.model';
import { IDictionary } from 'src/shared/dictionary/dictionary.interface';

export interface IOrisValueRepository {

	getValue(mnemonic: string): Observable<OrisValue>
	
	beginSetValue(mnemonic: string, value: string): void;

	beginSetValues(valueByMnemonic: IDictionary<string>): void;

}