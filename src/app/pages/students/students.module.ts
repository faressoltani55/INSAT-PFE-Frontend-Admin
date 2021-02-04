import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsListingComponent } from './students-listing/students-listing.component';
import { ReadStudentsComponent } from './read-students/read-students.component';
import {StudentsComponent} from "./students.component";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AddStudentComponent,
    StudentsListingComponent,
    ReadStudentsComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class StudentsModule { }
