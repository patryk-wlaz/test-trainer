import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'campaigns' },
  {
    path: '',
    loadChildren: () => import('./app-unauthenticated/app-unauthenticated.module').then(m => m.UnauthenticatedAppModule),
  },
  {
    path: '',
    loadChildren: () => import('./app-authenticated/app-authenticated.module').then(m => m.AuthenticatedAppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
