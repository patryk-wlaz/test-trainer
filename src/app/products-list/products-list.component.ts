import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'app/state';

import { GetProductResDtoInterface, MAX_RH, MIN_RH } from '@common';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { UpdateProduct, RemoveProduct } from '../state/products';
import * as _ from 'lodash';
import { CampaignDeleteProductDialogComponent } from '../campaign-delete-product/campaign-delete-product.component';
import { MatDialog } from '@angular/material';
import { parseRhValue } from 'app/shared/parsers/parse-retail-health-value';

@AutoUnsubscribe()
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  autoSaveSub: Subscription;

  displayedColumns = [
    'product-name',
    'asin',
    'retail-health',
    'priority',
    'delete-button',
  ];
  maxNameLength = 200;
  minRH = MIN_RH;
  maxRH = MAX_RH;
  isLoading$: Observable<boolean>;
  @Input('hide-columns') hideColumns: string[];
  @Input('products') products: GetProductResDtoInterface[];
  @Output() openAddProductModal = new EventEmitter<any>();

  autoSave$: Subject<GetProductResDtoInterface> = new Subject();

  constructor(private store$: Store<AppState>, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.isLoading$ = this.store$.pipe(select(store => store.products.isLoading));
    if (!_.isEmpty(this.hideColumns)) {
      this.displayedColumns = _.difference(this.displayedColumns, this.hideColumns);
    }

    this.autoSaveSub = this.autoSave$.subscribe((product: GetProductResDtoInterface): void => {
      this.saveProduct(product);
    });
  }

  ngOnDestroy(): void {}

  saveProduct(product: GetProductResDtoInterface): void {
    const updatedProduct = _.pick(product, ['name', 'retailHealth', 'priority']);
    this.store$.dispatch(new UpdateProduct({ productId: product.id, productData: updatedProduct}));
  }

  onProductEdit(product: GetProductResDtoInterface, changedValue: any, inputRef?: HTMLInputElement): void {
    if (_.has(changedValue, 'retailHealth')) {
      changedValue.retailHealth = parseRhValue(changedValue.retailHealth);
      inputRef.value = changedValue.retailHealth.toString();
    }
    this.autoSave$.next({ id: product.id, ...changedValue });
  }

  deleteProduct(productId: GetProductResDtoInterface['id']): void {
    const dialogRef = this.dialog.open(CampaignDeleteProductDialogComponent, {
      width: '368px',
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.store$.dispatch(new RemoveProduct(productId));
      }
    });
  }

  openAddProductsDialog(): void {
    this.openAddProductModal.emit();
  }

  public trackByFn(index: any, item: any) {
    return item.id;
  }
}
