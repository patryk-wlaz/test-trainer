import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { config } from './config';
import { TestComponent } from './test/test.component';

/*
  When I try to dynamically create routes based on config, I see error "Cannot read property 'loadChildren' of undefined"
  It looks like an angular error, whichc was supposed to be solved in previous version of framework.
  I have no time to fix this now, so when adding new tests you need to add routes manually.
*/

// const testRoutes = map(config, test => ({
//   path: test.route,
//   component: TestComponent,
//   data: { test },
// }));

const routes: Routes = [
  // ...testRoutes,
  {
    path: config[0].route,
    component: TestComponent,
    data: config[0],
  },
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
