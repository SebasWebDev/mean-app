import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Register } from './register.model';
import { LoginService } from '../../services';

@Component({
	selector: 'registration-form',
	templateUrl: './registration.html',
    providers: [LoginService]
})

export class RegistrationComponent { 	
	errorMessage: string = '';
    constructor( 
        private _loginService: LoginService, 
        private router: Router) {
    }
	model = new Register('', null, null, '', '', '');

	onSubmit(): void {
		console.log(name);
        this._loginService.register({ 
            name: this.model.name,
            dob: this.model.dob,
            city: this.model.city, 
            gender: this.model.gender,
            email: this.model.email,
            password: this.model.password 
        }).subscribe(
            (response) => {
                console.log(response);
            	if(response.success) {
            		this.router.navigate(['/login']);
            	}
            },
			error => this.errorMessage = <any>error.msg
        );
	}
}