import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalMainComponent } from './personal-main/personal-main.component';
import { PersonalLayoutComponent } from './personal-layout/personal-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalLayoutComponent,
    children: [
      {
        path: '',
        component: PersonalMainComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule { }
