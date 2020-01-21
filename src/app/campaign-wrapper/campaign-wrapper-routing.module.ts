import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CampaignWrapperComponent } from './campaign-wrapper.component';
import { CampaignDetailsComponent } from '../campaign-details/campaign-details.component';
import { CampaignProductsComponent } from '../campaign-products/campaign-products.component';
import { CampaignKeywordsComponent } from '../campaign-keywords/campaign-keywords.component';
import { CampaignStrategyComponent } from '../campaign-strategy/campaign-strategy.component';
import { CampaignSummaryComponent } from '../campaign-summary/campaign-summary.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignWrapperComponent,
    children: [
      { path: '' },
      { path: 'details', component: CampaignDetailsComponent },
      { path: 'products', component: CampaignProductsComponent },
      { path: 'keywords', component: CampaignKeywordsComponent },
      { path: 'strategy', component: CampaignStrategyComponent },
      { path: 'summary', component: CampaignSummaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignWrapperRoutingModule { }
