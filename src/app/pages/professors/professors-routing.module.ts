import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { ProfessorsListingComponent } from './professors-listing/professors-listing.component';
import { ProfessorsComponent } from './professors.component';
import { ReadProfessorsComponent } from './read-professors/read-professors.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessorsComponent,
    children: [
      { path: 'read', component: ReadProfessorsComponent },
      { path: 'add', component: AddProfessorComponent },
      { path: 'listing', component: ProfessorsListingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorsRoutingModule { }
