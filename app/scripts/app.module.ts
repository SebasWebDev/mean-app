import { NgModule }      from '@angular/core';
import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import * as appComps from './components';
import * as appPipes from './pipes';
import * as appDirectives from './directives';
import { routing,
         appRoutingProviders }  from './app.routing';
//import RouterActive from './directives/router-active';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	HttpModule,
  	routing,
    FormsModule
  ],
  declarations: [
  	AppComponent,
  	appComps.FooterComponent,
  	appComps.HeaderComponent,
    appComps.LoginComponent,
  	appComps.HomeComponent,
    appComps.RegistrationComponent,

  	appPipes.CustomDate,

    appDirectives.OpenCloseMenu
  ],
  providers: [
    appRoutingProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }