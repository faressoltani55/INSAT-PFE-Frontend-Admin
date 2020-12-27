import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsListingComponent } from './students-listing/students-listing.component';
import { ReadStudentsComponent } from './read-students/read-students.component';


@NgModule({
  declarations: [AddStudentComponent, StudentsListingComponent, ReadStudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }