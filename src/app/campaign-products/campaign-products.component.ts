import * as _ from 'lodash';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import {
  ProductTypes,
  GetProductResDtoInterface,
  GetCampaignResDtoInterface, PastedProductsType, CreateProductsDtoInterface,
} from '@common';
import * as productsActions from '@state/products/products.actions';
import { AppState } from 'app/state';
import { Observable, Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Go } from '@state/router';
import { MatDialog } from '@angular/material';
import { getProductsByType } from '../state/products';
import { CreateProductsDialogComponent } from 'app/create-products-dialog/create-products-dialog';
import { CreateApiSupportedProductsDialogComponent } from 'app/create-api-supported-products-dialog/create-api-supported-products-dialog';
import { isMarketSupported } from '@state/campaign';

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-products',
  templateUrl: './campaign-products.component.html',
  styleUrls: ['./campaign-products.component.scss'],
})
export class CampaignProductsComponent implements OnInit, OnDestroy {
  productTypes = ProductTypes;
  products$: Observable<GetProductResDtoInterface[]>;
  loadingProducts$: Observable<boolean>;
  productsError$: Observable<string>;
  campaignId: GetCampaignResDtoInterface['id'];
  currentCampaign$: Observable<GetCampaignResDtoInterface>;

  isAtLeastOneProductAPriority = false;
  productsLength = 0;
  dialogSub: Subscription;
  isApiSupported: boolean;

  constructor (
    private store$: Store<AppState>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.products$ = this.store$.pipe(select((store: AppState) => store.products.list), tap((products) => {
      this.isAtLeastOneProductAPriority = products.some((product) => product.priority);
      this.productsLength = products.length;
    }));
    this.loadingProducts$ = this.store$.pipe(select((store: AppState) => store.products.isLoading));
    this.productsError$ = this.store$.pipe(select((store: AppState) => store.products.errorMessage));
    this.currentCampaign$ = this.store$.pipe(
      select(store => store.campaign.campaign),
      tap(campaign => {
        this.campaignId = campaign.id;
      }));

    this.store$.pipe(
      select(isMarketSupported),
      tap((supported: boolean): void => {
        this.isApiSupported = supported;
      })
    ).subscribe();

    this.store$.dispatch(new productsActions.GetProductsByCampaign());
  }

  ngOnDestroy(): void { }

  redirect(where: string): void {
    const partUrl = where === 'campaigns'
      ? ''
      : `/${this.campaignId}/${where}`;
    this.store$.dispatch(new Go({ path: [`campaigns${partUrl}`] }));
  }

  getProductsOfTypeLength(type: ProductTypes): Observable<number> {
    return this.store$.pipe(
      select(getProductsByType(type)),
      map(keywords => keywords.length)
    );
  }

  saveProducts(data: CreateProductsDtoInterface['data'], productType: CreateProductsDtoInterface['type']): void {
    this.store$.dispatch(new productsActions.AddProducts({
      data,
      type: productType,
    }));
  }

  openAddProductsDialog(): void {
    const modal = this.isApiSupported
      ? CreateApiSupportedProductsDialogComponent
      : CreateProductsDialogComponent;

    const dialogRef = this.dialog.open((modal as any), {
      width: '80%',
      maxWidth: '990px',
      minWidth: '750px',
      disableClose: true,
    });

    this.dialogSub = dialogRef.afterClosed()
      .subscribe((data: { products: PastedProductsType; type: ProductTypes }) => {
        if (!data) { return; }

        return this.saveProducts(data.products, data.type);
      });
  }
}
