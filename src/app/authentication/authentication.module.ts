import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin/signin.component';

import {HttpClientModule} from '@angular/common/http';
import {AuthWindowComponent} from './auth-window/auth-window.component';
import {AuthWindowRedirectComponent} from './auth-window-redirect/auth-window-redirect.component';
import {AuthRoutingModule} from './auth-routing.module';


import {AuthenticationRoutingModule} from './authentication-routing.module';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [SigninComponent, AuthWindowComponent, AuthWindowRedirectComponent],
  exports: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthenticationRoutingModule,
    FormsModule,
    FontAwesomeModule,
    AuthRoutingModule
  ],
})

export class AuthenticationModule {
}
