import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { map } from 'lodash-es';
import { MainViewComponent } from './main-view/main-view.component';
import { config } from './config';
import { TestComponent } from './test/test.component';

const testRoutes = map(config, test => ({
  path: test.route,
  component: TestComponent,
  data: { test },
}));

const routes: Routes = [
  ...testRoutes,
  {
    path: '**',
    component: MainViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
