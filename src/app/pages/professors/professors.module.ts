import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorsRoutingModule } from './professors-routing.module';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { ProfessorsListingsComponent } from './professors-listings/professors-listings.component';
import { ProfessorsListingComponent } from './professors-listing/professors-listing.component';
import { ReadProfessorsComponent } from './read-professors/read-professors.component';


@NgModule({
  declarations: [AddProfessorComponent, ProfessorsListingsComponent, ProfessorsListingComponent, ReadProfessorsComponent],
  imports: [
    CommonModule,
    ProfessorsRoutingModule
  ]
})
export class ProfessorsModule { }
