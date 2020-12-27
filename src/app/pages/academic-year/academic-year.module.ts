import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicYearRoutingModule } from './academic-year-routing.module';
import { AddYearComponent } from './add-year/add-year.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { AddSoutenanceComponent } from './add-soutenance/add-soutenance.component';
import { SessionsListingComponent } from './sessions-listing/sessions-listing.component';
import { SoutenancesListingComponent } from './soutenances-listing/soutenances-listing.component';


@NgModule({
  declarations: [AddYearComponent, AddSessionComponent, AddSoutenanceComponent, SessionsListingComponent, SoutenancesListingComponent],
  imports: [
    CommonModule,
    AcademicYearRoutingModule
  ]
})
export class AcademicYearModule { }
