import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { ProfessorsListingComponent } from './professors-listing/professors-listing.component';
import { ReadProfessorsComponent } from './read-professors/read-professors.component';
import {ProfessorsRoutingModule} from "./professors-routing.module";
import {ProfessorsComponent} from "./professors.component";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ProfessorsListingComponent,
    AddProfessorComponent,
    ReadProfessorsComponent,
    ProfessorsComponent
  ],
  imports: [
    CommonModule,
    ProfessorsRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ProfessorsModule { }
