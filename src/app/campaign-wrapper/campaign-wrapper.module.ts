import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';

import { CampaignWrapperRoutingModule } from './campaign-wrapper-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { CampaignWrapperComponent } from './campaign-wrapper.component';
import { CampaignDetailsComponent } from 'app/campaign-details/campaign-details.component';
import { CampaignProductsComponent } from 'app/campaign-products/campaign-products.component';
import { ProductsListComponent } from 'app/products-list/products-list.component';
import { CampaignKeywordsComponent } from 'app/campaign-keywords/campaign-keywords.component';
import { CampaignKeywordsListComponent } from 'app/campaign-keywords-list/campaign-keywords-list.component';
import { CampaignDeleteKeywordDialogComponent } from 'app/campaign-delete-keyword/campaign-delete-keyword.component';
import { AssignProductsDialogComponent } from 'app/assign-products-dialog/assign-products-dialog';
import { CampaignStrategyKeywordsComponent } from 'app/campaign-strategy-keywords/campaign-strategy-keywords.component';
import { CampaignStrategyKeywordsListComponent } from 'app/campaign-strategy-keywords-list/campaign-strategy-keywords-list.component';
import { CampaignStrategyAdsplitComponent } from 'app/campaign-strategy-adsplit/campaign-strategy-adsplit.component';
import { CampaignStrategyComponent } from 'app/campaign-strategy/campaign-strategy.component';
import { CampaignSummaryComponent } from 'app/campaign-summary/campaign-summary.component';
import { CreateKeywordDialogComponent } from 'app/create-keyword-dialog/create-keyword-dialog';
import { CampaignSummaryKeywordsListComponent } from 'app/campaign-summary-keywords-list/campaign-summary-keywords-list.component';
import { CampaignStrategyChartComponent } from 'app/campaign-strategy-chart/campaign-strategy-chart.component';
import { CampaignDeleteProductDialogComponent } from 'app/campaign-delete-product/campaign-delete-product.component';
import { CreateProductsDialogComponent } from 'app/create-products-dialog/create-products-dialog';
import { EditStrategyDialogComponent } from 'app/edit-strategy-dialog/edit-strategy-dialog.component';
import { CampaignSummaryCampaignInfoComponent } from 'app/campaign-summary-campaign-info/campaign-summary-campaign-info.component';
import { CampaignStrategyChartLegendComponent } from 'app/campaign-strategy-chart-legend/campaign-strategy-chart-legend.component';
import { TabHeaderComponent } from 'app/tab-header/tab-header.component';
import { CreateApiSupportedProductsDialogComponent } from '../create-api-supported-products-dialog/create-api-supported-products-dialog';
import { LoadKeywordsDialogComponent } from 'src/app/load-keywords-dialog/load-keywords-dialog.component';

@NgModule({
  declarations: [
    TabHeaderComponent,
    CampaignWrapperComponent,
    CampaignDetailsComponent,
    CampaignProductsComponent,
    CampaignKeywordsComponent,
    CampaignStrategyComponent,
    CampaignSummaryComponent,
    ProductsListComponent,
    CampaignKeywordsListComponent,
    CampaignDeleteKeywordDialogComponent,
    AssignProductsDialogComponent,
    CampaignStrategyKeywordsComponent,
    CampaignStrategyKeywordsListComponent,
    CampaignStrategyAdsplitComponent,
    CreateKeywordDialogComponent,
    CampaignSummaryKeywordsListComponent,
    CampaignStrategyChartComponent,
    CampaignDeleteProductDialogComponent,
    CreateProductsDialogComponent,
    CreateApiSupportedProductsDialogComponent,
    EditStrategyDialogComponent,
    CampaignSummaryCampaignInfoComponent,
    CampaignStrategyChartLegendComponent,
    LoadKeywordsDialogComponent,
  ],
  imports: [
    SharedModule,
    CampaignWrapperRoutingModule,
    Ng5SliderModule,
  ],
  entryComponents: [
    CampaignDeleteKeywordDialogComponent,
    AssignProductsDialogComponent,
    CreateKeywordDialogComponent,
    CampaignDeleteProductDialogComponent,
    CreateProductsDialogComponent,
    CreateApiSupportedProductsDialogComponent,
    EditStrategyDialogComponent,
    LoadKeywordsDialogComponent,
  ],
})
export class CampaignWrapperModule { }
