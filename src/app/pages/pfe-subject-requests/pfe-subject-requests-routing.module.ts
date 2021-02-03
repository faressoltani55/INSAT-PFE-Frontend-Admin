import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PfeSubjectRequestsComponent } from './pfe-subject-requests.component';
import { RequestsListingComponent } from './requests-listing/requests-listing.component';
import { SubjectRequestCardComponent } from './subject-request-card/subject-request-card.component';

const routes: Routes = [{
    path: '',
    component: PfeSubjectRequestsComponent,
    children: [
      { path: '', component: RequestsListingComponent},
      { path: ':id', component: SubjectRequestCardComponent},
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PfeSubjectRequestsRoutingModule { }
