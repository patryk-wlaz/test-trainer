import * as _ from 'lodash';
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { isMarketSupported } from '@state/campaign';
import { MatDialog } from '@angular/material';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { tap } from 'rxjs/operators';

import { AppState } from 'app/state';
import {
  GetKeywordsResDtoInterface,
  GetKeywordResDtoInterface,
  Product,
  GetCampaignResDtoInterface,
  GetProductResDtoInterface,
} from '@common';
import { CampaignDeleteKeywordDialogComponent } from 'app/campaign-delete-keyword/campaign-delete-keyword.component';
import * as keywordsActions from '@state/keywords';

import { AssignProductsDialogComponent } from 'app/assign-products-dialog/assign-products-dialog';
import { KeywordsState } from 'app/state/keywords';
import { animate, style, transition, trigger } from '@angular/animations';
import { parseCtrValue } from 'app/shared/parsers/prase-ctr-value';
import { parseCpcValue } from 'app/shared/parsers/parse-cpc-value';

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-keywords-list',
  templateUrl: './campaign-keywords-list.component.html',
  styleUrls: ['./campaign-keywords-list.component.scss'],
  animations: [
    trigger(
      'enterAnimation',
      [
        transition(
          ':enter', [
            style({ opacity: 0 }),
            animate('200ms', style({ 'opacity': 1 })),
          ]
        ),
        transition(
          ':leave', [
            style({ 'opacity': 1 }),
            animate('200ms', style({ 'opacity': 0 })),
          ]
        )]
    ),
  ],
})
export class CampaignKeywordsListComponent implements OnInit, OnDestroy {
  @Input('keywords') keywords: GetKeywordsResDtoInterface['rows'];
  @Output() openAddKeywordModal = new EventEmitter<any>();
  @Output() onSearchKeyword = new EventEmitter<string>();
  @ViewChild('setCtrButton') setCtrButton;
  @ViewChild('setCpcButton') setCpcButton;
  @ViewChild('searchInput') searchInput;

  productsSub: Subscription;
  autoSaveSub: Subscription;
  currencySub: Subscription;
  currentTabSub: Subscription;
  currency: GetCampaignResDtoInterface['currency'];
  isLoading$: Observable<KeywordsState['isLoading']>;
  isApiAvailable: boolean;
  isGeneric: boolean;

  autoSave$: Subject<GetKeywordResDtoInterface> = new Subject();
  currentCampaignCurrency$: Observable<GetCampaignResDtoInterface['currency']>;
  displayedColumns = [
    'keyword-name',
    'search-volume',
    'products',
    'arh',
    'ctr',
    'cpc',
    'delete-button',
  ];

  minCPC = 0.01;
  minCTR = 0.1;
  minSearchVolume = 1;
  ctrDialogPosition = {
    top: 0,
    left: 0,
    right: 0,
  };
  cpcDialogPosition = {
    top: 0,
    left: 0,
    right: 0,
  };

  isCtrDialogOpened = false;
  isCpcDialogOpened = false;

  maxNameLength = 250;

  private products: GetProductResDtoInterface[];
  ctrDefaultValue = `${this.minCTR}`;
  cpcDefaultValue = `${this.minCPC}`;

  constructor(
    private store$: Store<AppState>,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.currentCampaignCurrency$ = this.store$.pipe(select(store => store.campaign.campaign.currency));
    this.currencySub = this.currentCampaignCurrency$.subscribe(currency => {
      this.currency = currency;
    });
    this.productsSub = this.store$.pipe(
      select(store => store.products.list),
      tap((products) => this.products = products)
    ).subscribe();
    this.autoSaveSub = this.autoSave$.pipe(
      tap((keyword: GetKeywordResDtoInterface) => this.updateKeyword(keyword))
    ).subscribe();
    this.isLoading$ = this.store$.pipe(select(state => state.keywords.isLoading));
    this.store$.pipe(select(isMarketSupported)).subscribe((isAvailable) => {
      this.isApiAvailable = isAvailable;
    });
    this.currentTabSub = this.store$.pipe(
      select(store => store.keywords.currentTab),
      tap((tab: number) => {
        this.isGeneric = tab === 1;
        if (this.searchInput) { this.searchInput.nativeElement.value = ''; }
      })
    ).subscribe();
  }

  ngOnDestroy(): void {}

  updateKeyword(keyword: GetKeywordResDtoInterface): void {
    const updatedKeyword = _.pick(keyword, ['name', 'searchVolume', 'cpc', 'ctr', 'active']);
    this.store$.dispatch(new keywordsActions.UpdateKeyword({
      keywordData: updatedKeyword,
      keywordId: keyword.id,
    }));
  }

  onKeywordEdit(keyword: GetKeywordResDtoInterface, changedValue: any, inputRef?: HTMLInputElement): void {
    this.autoSave$.next({ id: keyword.id, ...changedValue });
  }

  setCTR(keyword: GetKeywordResDtoInterface, changedValue: any, inputRef?: HTMLInputElement): void {
    changedValue.ctr = parseCtrValue(changedValue.ctr);
    inputRef.value = `${changedValue.ctr}`;
    this.autoSave$.next({ id: keyword.id, ...changedValue });
  }

  setCPC(keyword: GetKeywordResDtoInterface, changedValue: any, inputRef?: HTMLInputElement): void {
    changedValue.cpc = parseCpcValue(changedValue.cpc);
    inputRef.value = `${changedValue.cpc}`;
    this.autoSave$.next({ id: keyword.id, ...changedValue });
  }

  setSearchVolume(keyword: GetKeywordResDtoInterface, changedValue: any, inputRef?: HTMLInputElement): void {
    if (changedValue.searchVolume < this.minSearchVolume || !_.isNumber(changedValue.searchVolume)) {
      changedValue.searchVolume = this.minSearchVolume;
    }

    changedValue.searchVolume = _.round(changedValue.searchVolume);
    inputRef.value = changedValue.searchVolume;

    this.autoSave$.next({ id: keyword.id, ...changedValue });
  }

  openAddKeywordsDialog(): void {
    this.openAddKeywordModal.emit();
  }

  openAssignProductsDialog(keyword: GetKeywordResDtoInterface): void {
    const dialogRef = this.dialog.open(AssignProductsDialogComponent, {
      width: '90%',
      data: {
        productEntities: this.products,
        keyword,
      },
    });

    dialogRef.afterClosed().subscribe((data: { productIds: Product['id'][] }) => {
      if (data) {
        this.store$.dispatch(new keywordsActions.UpdateKeyword({
          keywordId: keyword.id,
          keywordData: {
            ..._.pick(keyword, ['cpc', 'name', 'active', 'ctr', 'searchVolume']),
            productIds: data.productIds,
          },
        }));
      }
    });
  }

  deleteKeyword(keywordId: GetKeywordResDtoInterface['id']): void {
    const dialogRef = this.dialog.open(CampaignDeleteKeywordDialogComponent, {
      width: '368px',
    });

    dialogRef.afterClosed().subscribe(option => {
      if (option) {
        this.store$.dispatch(new keywordsActions.DeleteKeyword(keywordId));
      }
    });
  }

  public trackByFn(index: any, item: any) {
    return item.id;
  }

  calculateButtonPosition(element) {
    if (element) {
      const { top, left, right } = element._elementRef.nativeElement.getBoundingClientRect();
      return { top, left, right };
    }
  }

  openCtrDialog() {
    this.ctrDialogPosition = this.calculateButtonPosition(this.setCtrButton);
    this.isCtrDialogOpened = true;
  }

  closeCtrDialog() {
    this.isCtrDialogOpened = false;
  }

  openCpcDialog() {
    this.cpcDialogPosition = this.calculateButtonPosition(this.setCpcButton);
    this.isCpcDialogOpened = true;
  }

  closeCpcDialog() {
    this.isCpcDialogOpened = false;
  }

  setDefaultCtrValue() {
    this.store$.dispatch(new keywordsActions.UpdateKeywords({
      keywordData: _.map(this.keywords, (keyword) => ({
        id: keyword.id,
        ctr: parseCtrValue(this.ctrDefaultValue),
      })),
    }));
    this.closeCtrDialog();
  }

  setDefaultCpcValue() {
    this.store$.dispatch(new keywordsActions.UpdateKeywords({
      keywordData: _.map(this.keywords, (keyword) => ({
        id: keyword.id,
        cpc: parseCpcValue(this.cpcDefaultValue),
      })),
    }));
    this.closeCpcDialog();
  }

  onInputChange(event: KeyboardEvent): void {
    this.onSearchKeyword.emit(this.searchInput.nativeElement.value);
  }
}
