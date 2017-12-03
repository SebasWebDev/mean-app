/*
 * Service for external URLs
 *
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, BaseRequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class ExternalService {
    constructor(private _http: Http,
		private window: Window) {
	}

	API_ENDPOINT() {
		if (this.window.location.href.search('localhost:8080') !== -1) {
			return 'https://cx-hackaton-sebasl.c9users.io/';
		} else {
			return '/';
		}
	}

	createHeader(headers: Headers) {
		headers.append('X-Requested-With', 'XMLHttpRequest');
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		headers.append('ADRUM', 'isAjax:true');
		headers.append('Connection', 'keep-alive');
	}

	// content for contract overview
	getExternalContent(url: string) {

		let headers = new Headers();
		this.createHeader(headers);
		console.log('request');
		return this._http.get(url, {
			headers: headers
		})
			.map((res: Response) => res.text())
			.catch(this.handleError);
	}

	// error handling
	private handleError(error: Response) {
		// in a real world app, we may send the error to some remote logging infrastructure
		// instead of just logging it to the console
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
