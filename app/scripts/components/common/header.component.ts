import {Component, OnInit} from '@angular/core';
import { UserService } from '../../services';

@Component({
	selector: 'header-cmp',
	templateUrl: './header.component.html',
	providers: [ UserService ]
})
export class HeaderComponent implements OnInit {
	userName: string;
	constructor(private _userService: UserService){}
    ngOnInit() {
    	if( this._userService.isLoggedIn() ) {
    		this.userName = this._userService.getUserName();
    	}
    }
}