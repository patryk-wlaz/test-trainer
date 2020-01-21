import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CampaignsListComponent } from 'app/campaigns-list/campaigns-list.component';
import { CampaignWrapperGuard } from 'app/campaign-wrapper/campaign-wrapper.guard';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { ServerErrorComponent } from 'app/server-error/server-error.component';
import { ForbiddenComponent } from 'app/forbidden/forbidden.component';
import { AuthGuard } from '../shared/guards/auth.guard';

import { AuthenticatedAppComponent } from './app-authenticated.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedAppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'campaigns',
        component: CampaignsListComponent },
      {
        path: 'campaigns/:campaignId',
        loadChildren: () => import('../campaign-wrapper/campaign-wrapper.module').then(m => m.CampaignWrapperModule),
        canActivate: [CampaignWrapperGuard],
      },
      {
        path: 'server-error',
        component: ServerErrorComponent,
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [CampaignWrapperGuard,],
})
export class AuthenticatedAppRoutingModule { }
