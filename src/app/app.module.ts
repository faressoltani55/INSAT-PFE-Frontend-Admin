import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {PagesModule} from './pages/pages.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';

const configSocket: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

import {JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { SpinnerComponent } from './components/spinner/spinner.component';
import {SpinnerModule} from './components/spinner/spinner.module';

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: () => {
      return localStorage.getItem('token');
    },
    allowedDomains: ['localhost:3000'],
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    PagesModule,
    SocketIoModule.forRoot(configSocket),
    JwtModule.forRoot(JWT_Module_Options)
    NgxPaginationModule,
    SpinnerModule,
  ],

  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
