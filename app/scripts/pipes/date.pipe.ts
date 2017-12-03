import {Pipe, PipeTransform} from '@angular/core';
/*
 * Transform a date string|number 
 * to the format used in the Aegon website
 * Example: 25 September 2015
 */
@Pipe({name: 'CustomDate'})
export class CustomDate implements PipeTransform {
  	transform(value:string, args?:string[]) : any {
		var monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
			"Juli", "Augustus", "September", "Oktober", "November", "December"],
			date = new Date(value),
			day: number, year: number;

		if(typeof date !== undefined){
			if (isNaN( date.getDate())) {
				return value;
			} else {
				return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
			}
		}else{
			return value;
		}
  	}
}