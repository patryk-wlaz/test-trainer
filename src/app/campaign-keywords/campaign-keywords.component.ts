import * as _ from 'lodash';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import {
  GetKeywordsResDtoInterface,
  KeywordTypes,
  GetCampaignResDtoInterface,
  Campaign,
  CreateKeywordsDtoInterface,
  Currency,
  GetProductResDtoInterface,
  TabIndexToKeywordType,
} from '@common';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state';
import { AddKeywords, GetKeywords, getKeywordsByType, SetCurrentTab } from '../state/keywords';
import { Observable } from 'rxjs';
import { Go } from '@state/router';
import { tap, map, take } from 'rxjs/operators';
import * as productsActions from '@state/products';
import { CreateKeywordDialogComponent } from 'app/create-keyword-dialog/create-keyword-dialog';
import { MatDialog } from '@angular/material/dialog';
import { LoadKeywordsDialogComponent } from '../load-keywords-dialog/load-keywords-dialog.component';
import { isMarketSupported } from '../state/campaign';

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-keywords',
  templateUrl: './campaign-keywords.component.html',
  styleUrls: ['./campaign-keywords.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignKeywordsComponent implements OnInit, OnDestroy {
  keywordTypes = KeywordTypes;
  keywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  currentCampaign$: Observable<GetCampaignResDtoInterface>;
  campaignId: Campaign['id'];
  loadingKeywords$: Observable<boolean>;
  keywordsError$: Observable<string>;
  currentTab$: Observable<number>;
  brandKeywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  genericKeywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  competitorKeywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  isApiAvailable: boolean;
  currentType: KeywordTypes;
  search: string;
  private currency: Currency;
  private products: GetProductResDtoInterface[];

  constructor(
    private store$: Store<AppState>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(new productsActions.GetProductsByCampaign());
    this.store$.dispatch(new GetKeywords({ calculateBudget: false }));

    this.brandKeywords$ = this.store$.pipe(select(getKeywordsByType(KeywordTypes.BRAND)));
    this.genericKeywords$ = this.store$.pipe(select(getKeywordsByType(KeywordTypes.GENERIC)));
    this.competitorKeywords$ = this.store$.pipe(select(getKeywordsByType(KeywordTypes.COMPETITOR)));

    this.keywords$ = this.store$.pipe(select((store: AppState) => store.keywords.list));
    this.keywordsError$ = this.store$.pipe(select((store: AppState) => store.keywords.errorMessage));
    this.loadingKeywords$ = this.store$.pipe(select((store: AppState) => store.keywords.isLoading));
    this.currentCampaign$ = this.store$.pipe(
      select(store => store.campaign.campaign),
      tap(campaign => {
        this.campaignId = campaign.id;
    }));
    this.currentTab$ = this.store$.pipe(select(store => store.keywords.currentTab));

    this.currentTab$.subscribe(tab => {
      this.currentType = TabIndexToKeywordType[tab];
    });

    this.store$.pipe(
      select((store: AppState) => store.campaign.campaign),
      tap(campaign => this.currency = campaign.currency),
      take(1)
    ).subscribe();

    this.store$.pipe(
      select((store: AppState) => store.products.list),
      tap(products => this.products = products),
      take(1)
    ).subscribe();

    this.store$.pipe(select(isMarketSupported)).subscribe((isAvailable) => {
      this.isApiAvailable = isAvailable;
    });
  }

  ngOnDestroy(): void {}

  redirect(where: string): void {
    const partUrl = where === 'campaigns'
      ? ''
      : `/${this.campaignId}/${where}`;
    this.store$.dispatch(new Go({ path: [`campaigns${partUrl}`] }));
  }

  setCurrentTab($event: number): void {
    this.search = '';
    this.store$.dispatch(new SetCurrentTab({ currentTab: $event }));
  }

  getKeywordsOfTypeLength(type: KeywordTypes): Observable<number> {
    return this.store$.pipe(
      select(getKeywordsByType(type)),
      map(keywords => keywords.length)
    );
  }

  openAddKeywordsDialog(): void {
    if (this.currentType === KeywordTypes.GENERIC || !this.isApiAvailable) {
      return this.openManualAddKeywordsDialog();
    }
    return this.openAutoAddKeywordsDialog();
  }

  openAutoAddKeywordsDialog(): void {
    this.dialog.open(LoadKeywordsDialogComponent, {
      width: '45%',
      minWidth: '750px',
      data: { type: this.currentType },
    });
  }

  openManualAddKeywordsDialog(): void {
    const dialogRef = this.dialog.open(CreateKeywordDialogComponent, {
      width: '45%',
      minWidth: '750px',
      data: {
        currency: this.currency,
        products: this.products,
      },
    });

    dialogRef.afterClosed().subscribe((data: CreateKeywordsDtoInterface) => {
      if (!data) {
        return;
      }

      this.store$.dispatch(new AddKeywords(data));
    });
  }

  setSearchValue(value: string): void {
    this.search = value;
  }
}
