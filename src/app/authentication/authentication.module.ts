import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin/signin.component';

import {HttpClientModule} from '@angular/common/http';


import {AuthenticationRoutingModule} from './authentication-routing.module';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    SigninComponent,
    SuccessComponent,
  ],
  exports: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthenticationRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
})

export class AuthenticationModule {
}
