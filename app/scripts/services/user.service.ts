import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UserService {
	private userName: string;
    constructor(private _http: Http) { 
   		let user = sessionStorage.getItem('user');
    	if( user ) {
    		this.userName = user;
    	}
    }

	isLoggedIn(): boolean {
		return this.userName !== undefined;
	}

	getUserName(): any {
		return this.isLoggedIn() ? this.userName : false;
	}
}