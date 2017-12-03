import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './login';
import { LoginService } from '../../services';

@Component({
	selector: 'login-form',
	templateUrl: './login.html',
    providers: [LoginService]
})

export class LoginComponent { 
	errorMessage: string = '';
    constructor( private _loginService: LoginService, private router: Router) {
    }
	model = new Login('', '');

	onSubmit(): void {
		console.log(name);
        this._loginService.login({ email: this.model.email, password: this.model.password }).subscribe(
            (response) => {
            	if(response.success) {
                    sessionStorage.setItem('user', response.msg.name);
            		this.router.navigate(['/home'], response.msg);
            	}
            },
			error => this.errorMessage = <any>error
        );
	}
}