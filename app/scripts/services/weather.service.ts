import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class WeatherService {
    constructor(private _http: Http) { }

	getWeather(position: any): Promise<any> {
	console.log(position);
	let that = this;
	return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude +',' + position.coords.longitude + '&sensor=false')
		.toPromise()
		.then(response => {
			let result = response.json(),
				city: string = '', 
				country: string = '';
			
			result = result.results,

			console.log(result);
			for (let i=0; i<result[0].address_components.length; i++) {
				if (result[0].address_components[i].types[0] == "administrative_area_level_1" || result[0].address_components[i].types[0] == "locality") {
					city = result[0].address_components[i].long_name;
                }
                if (result[0].address_components[i].types[0] == "country") {
                    country = result[0].address_components[i].long_name;
                }
            }
            console.log(city);
            console.log(country);
			return this._http.get('/backend/weather.php?city=' + city + '&country=' + country)
			.toPromise()
			.then((res: Response) => {
				let response = res.json();
				return response.weather[0].main;
			})
			.catch(this.handleError);
		})
		.catch(this.handleError);
	}


	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
		  error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}