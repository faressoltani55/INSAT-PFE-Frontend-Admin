import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PfeSubjectRequestsComponent } from './pfe-subject-requests.component';

const routes: Routes = [
  {
    path: 'requests',
    component: PfeSubjectRequestsComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PfeSubjectRequestsRoutingModule { }
