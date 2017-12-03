import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ContentService {
    constructor(private _http: Http) {
	}

	API_ENDPOINT() {
		if (window.location.href.search('hackathon.dev') === -1) {
			return 'https://cx-hackaton-sebasl.c9users.io/backend';
		} else {
			return '/backend';
		}
	}

    // content for the menu
	getMenuItems() {
		return this._http.get(`${this.API_ENDPOINT()}/api/menu`)
			.map((res: Response) => {
				let menus = res.json()
				let menuArray: any = []
				let loop = 0
				// set the parent menues
				for(let i in menus) {
					if(menus[i].tid_1 === '') {
						let newMenu = menus[i]
						newMenu.submenues = []
						menuArray.push(newMenu);
					}
				}
				for (let i in menus) {
					if (menus[i].tid_1 !== '') {
						for (let j in menuArray) {
							if (menuArray[j].tid === menus[i].tid_1) {
								menuArray[j].submenues.push(menus[i])
							}
						}
					}
				}
				return menuArray;
			})
			.catch(this.handleError);
	}

    // content for contract overview
    getContractOverview() {
		return this._http.get(`${this.API_ENDPOINT()}/api/widget`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
    }

    // content for all news items
    getNews(id?: number | string) {
		id = id ? '/' + id : '';
		console.log(id);
		return this._http.get(`${this.API_ENDPOINT()}/api/news` + id)
			.map((res: Response) => res.json())
			.catch(this.handleError);
    }

    // content for all news items
    getMessage(tag: string) {
		return this._http.get(`${this.API_ENDPOINT()}/api/messages/weather/` + tag)
			.toPromise()
			.then((res: Response) => res.json())
			.catch(this.handleError);
    }

    // particulier section
	getNodeByID(id: number | string) {
		return this._http.get(`${this.API_ENDPOINT()}/api/content/nid/` + id)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

    // particulier section
	getContentByID(id: number | string) {
		return this._http.get(`${this.API_ENDPOINT()}/api/content/`+id)
			.map((res: Response) => res.json())
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
