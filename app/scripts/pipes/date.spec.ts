import {CustomDate} from './date.pipe';

describe('CustomDate', () => {
	let pipe: CustomDate;
	beforeEach(() => {
		pipe = new CustomDate();
	});
	it('transforms "2016/01/03" to "3 Januari 2016"', () => {
		expect(pipe.transform('2016/01/03')).toEqual('3 Januari 2016');
	});
	it('transforms "2016-02-22T15:43:56+0100" to "22 Februari 2016"', () => {
		expect(pipe.transform('2016-02-22T15:43:56+0100')).toEqual('22 Februari 2016');
	});
	it('leaves "Abc" unchanged', () => {
		expect(pipe.transform('Abc')).toEqual('Abc');
	});
});