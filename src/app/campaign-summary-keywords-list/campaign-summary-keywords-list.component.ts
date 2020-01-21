import * as _ from 'lodash';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { AppState } from 'app/state';
import { GetKeywordsResDtoInterface, GetKeywordResDtoInterface, GetCampaignResDtoInterface } from '@common';
import * as productsActions from '@state/products';

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-summary-keywords-list',
  templateUrl: './campaign-summary-keywords-list.component.html',
  styleUrls: ['./campaign-summary-keywords-list.component.scss'],
})
export class CampaignSummaryKeywordsListComponent implements OnInit, OnDestroy {
  @Input('keywords') keywords: GetKeywordsResDtoInterface['rows'];

  public currentCampaignCurrency$: Observable<GetCampaignResDtoInterface['currency']>;
  public displayedColumns = [
    'keyword-name',
    'products',
    'search-volume',
    'arh',
    'target-imps-share',
    'impressions',
    'ctr',
    'clicks',
    'cpc',
    'budget',
  ];

  public constructor (
    private store$: Store<AppState>,
    public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.currentCampaignCurrency$ = this.store$.pipe(select(store => store.campaign.campaign.currency));
  }

  public openAllProductsDialog(keyword: GetKeywordResDtoInterface): void {
    return;
  }

  public ngOnDestroy(): void { }

}
