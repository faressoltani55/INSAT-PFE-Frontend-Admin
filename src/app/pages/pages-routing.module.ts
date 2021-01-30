import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {AuthGuard} from '../services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },

      { path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./../pages/home/home.module').then(mod => mod.HomeModule)
      },
      { path: 'search',
        canActivate: [AuthGuard],
        loadChildren: () => import('./../pages/search/search.module').then(mod => mod.SearchModule)
      },
      { path: 'calendar',
        canActivate: [AuthGuard],
        loadChildren: () => import('./../pages/calendar/calendar.module').then(mod => mod.CalendarModule)
      },
      { path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () => import('./../pages/profile/profile.module').then(mod => mod.ProfileModule)
      },
      {
        path: 'academic-year',
        canActivate: [AuthGuard],
        loadChildren: () => import('./../pages/academic-year/academic-year.module').then(mod => mod.AcademicYearModule)
      },
      {
        path: 'propositions-pfe',
        canActivate: [AuthGuard],
        loadChildren: () => import('./../pages/pfe-subject-requests/pfe-subject-requests.module').then(mod => mod.PfeSubjectRequestsModule)
      },
      {
        path: 'professors',
        canActivate: [AuthGuard],
        loadChildren: () => import('./../pages/professors/professors.module').then(mod => mod.ProfessorsModule)
      },
      {
        path: 'students',
        canActivate: [AuthGuard],
        loadChildren: () => import('./../pages/students/students.module').then(mod => mod.StudentsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
