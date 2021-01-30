import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PfeSubjectRequestsRoutingModule } from './pfe-subject-requests-routing.module';
import { FormsModule } from '@angular/forms';
import { SubjectRequestCardComponent } from './subject-request-card/subject-request-card.component';
import { RequestsListingComponent } from './requests-listing/requests-listing.component';

@NgModule({
  declarations: [SubjectRequestCardComponent, RequestsListingComponent],

  imports: [
    CommonModule,
    FormsModule,
    PfeSubjectRequestsRoutingModule
  ]
})
export class PfeSubjectRequestsModule { }
