import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSessionComponent } from './add-session/add-session.component';
import { AddSoutenanceComponent } from './add-soutenance/add-soutenance.component';
import { AddYearComponent } from './add-year/add-year.component';
import { AdditionsComponent } from './additions/additions.component';
import { ListingsComponent } from './listings/listings.component';
import { SessionsListingComponent } from './sessions-listing/sessions-listing.component';
import { SoutenancesListingComponent } from './soutenances-listing/soutenances-listing.component';

const routes: Routes = [
  {
    path: 'add',
    component: AdditionsComponent,
    children: [
      {path: 'year', component: AddYearComponent},
      {path: 'session', component: AddSessionComponent},
      {path: 'soutenance', component: AddSoutenanceComponent}
    ]
  },
  {
    path: 'listing',
    component: ListingsComponent,
    children : [
      {path: 'sessions', component: SessionsListingComponent},
      {path: 'soutenances', component: SoutenancesListingComponent}
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicYearRoutingModule { }
