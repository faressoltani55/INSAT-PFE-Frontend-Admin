import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ReadStudentsComponent } from './read-students/read-students.component';
import { StudentsListingComponent } from './students-listing/students-listing.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      { path: 'read', component: ReadStudentsComponent },
      { path: 'add', component: AddStudentComponent },
      { path: 'listing', component: StudentsListingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
