import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SuccessComponent} from './success/success.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
