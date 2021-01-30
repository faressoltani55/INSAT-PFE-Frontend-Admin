import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RequestsListingComponent } from './pages/pfe-subject-requests/requests-listing/requests-listing.component';
import { SubjectRequestCardComponent } from './pages/pfe-subject-requests/subject-request-card/subject-request-card.component';

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () => import('./authentication/authentication.module')
      .then(m => m.AuthenticationModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
