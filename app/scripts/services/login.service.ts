import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class LoginService {
    constructor(private _http: Http) {
	}

	API_ENDPOINT() {
		if (window.location.href.search('hackathon.dev') === -1) {
			return 'https://cx-hackaton-sebasl.c9users.io:8081';
		} else {
			return 'http://hackathon.dev:8081';
		}
	}

	login(data: any) {
		return this._http.post(`${this.API_ENDPOINT()}/api/authenticate`, data)
			.map(this.extractData)
			.catch(this.handleError);
	}
	register(data: any) {
		return this._http.post(`${this.API_ENDPOINT()}/api/signup`, data)
			.map(this.extractData)
			.catch(this.handleError);

	}

	logEvent(data: any) {
		return this._http.post(`${this.API_ENDPOINT()}/api/events`, data)
			.map(this.extractData)
			.catch(this.handleError);

	}
	getUser() {
		return this._http.get(`${this.API_ENDPOINT()}/api/get-user`)
			.map((res: Response) => res.json())
			.catch(this.handleError);

	}

	private extractData(res: Response) {
		let body = res.json();
		return body || { };
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