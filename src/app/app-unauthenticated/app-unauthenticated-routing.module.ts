import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from 'app/login/login.component';

import { UnauthenticatedAppComponent } from './app-unauthenticated.component';


const routes: Routes = [
  {
    path: '',
    component: UnauthenticatedAppComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthenticatedAppRoutingModule { }
