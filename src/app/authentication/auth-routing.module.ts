import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthWindowRedirectComponent} from './auth-window-redirect/auth-window-redirect.component';

const routes: Routes = [
  { path: 'success', component: AuthWindowRedirectComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
