import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/guards/auth.guard';

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
