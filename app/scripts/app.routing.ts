/*
    Routing & Navigation (also see ./common/components/nav.component)
    https://angular.io/docs/ts/latest/guide/router.html
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, RegistrationComponent, HomeComponent } from './components';


const appRoutes: Routes = [
	{ 
		path: 'login', 
		component: LoginComponent
	},	
		{ 
		path: 'register', 
		component: RegistrationComponent
	},	
	{ 
		path: 'home', 
		component: HomeComponent
	},
	{
		path: '**',
		component: LoginComponent
	}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);