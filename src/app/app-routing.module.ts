import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { config } from './config';
import { AuthGuard, RoleGuard } from './core/guards';

import {
  AudiencesWrapperComponent,
  BudgetWrapperComponent,
  BriefsWrapperComponent,
  GrowthOpportunitiesWrapperComponent,
  MarketAdminWrapperComponent,
  LoginComponent,
  PageSpeedInsightsWrapperComponent,
  ScorecardsWrapperComponent,
  WmNgComponentsShowcaseComponent,
} from './pages';
import { SetupHeaderComponent } from './pages/setup-header/setup-header.component';
import { SetupHeaderCompleteComponent } from './pages/setup-header-complete/setup-header-complete.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/personal/personal.module')
      .then((module) => module.PersonalModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    loadChildren: () => import('./modules/contacts/contacts.module')
      .then((module) => module.ContactsModule),
    /*     canActivate: [AuthGuard], */
  },
  {
    path: 'audiences/:brandId',
    children: [
      {
        path: '**',
        component: AudiencesWrapperComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'budget',
    // TODO: guard budget or make sure that budget app guards itself (not recommended)
    // canActivate: [ AuthGuard ],
    children: [
      {
        path: '**',
        component: BudgetWrapperComponent,
      },
    ],
  },
  {
    path: 'briefs',
    children: [
      {
        path: '**',
        component: BriefsWrapperComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'growth-opportunities/:brandId',
    children: [
      {
        path: '**',
        component: GrowthOpportunitiesWrapperComponent,
      },
    ],
  },
  {
    path: 'market-admin',
    canActivate: [AuthGuard, RoleGuard],
    data: { userRole: [config.constants.USER_ROLES.MARKET_ADMIN] },
    children: [
      {
        path: '**',
        component: MarketAdminWrapperComponent,
      },
    ],
  },
  {
    path: 'brands/:brandId/page-speed-insights',
    children: [
      {
        path: '**',
        component: PageSpeedInsightsWrapperComponent,
      },
    ],
  },
  {
    path: 'scorecards/:brandId',
    children: [
      {
        path: '**',
        component: ScorecardsWrapperComponent,
      },
    ],
  },
  {
    path: 'login',
    children: [
      {
        path: '**',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'showcase',
    component: WmNgComponentsShowcaseComponent,
  },
  {
    path: 'clients/:clientId/markets',
    component: SetupHeaderComponent,
  },
  {
    path: 'clients/:clientId/markets/:countryCode/brands/:brandId',
    component: SetupHeaderCompleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
