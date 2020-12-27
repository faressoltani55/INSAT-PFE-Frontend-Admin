import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PfeSubjectRequestsRoutingModule } from './pfe-subject-requests-routing.module';
import { RequestsListingComponent } from './requests-listing/requests-listing.component';


@NgModule({
  declarations: [RequestsListingComponent],
  imports: [
    CommonModule,
    PfeSubjectRequestsRoutingModule
  ]
})
export class PfeSubjectRequestsModule { }
