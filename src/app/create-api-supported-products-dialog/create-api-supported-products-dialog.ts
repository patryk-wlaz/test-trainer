import { Component, ViewEncapsulation, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatDialog } from '@angular/material';
import { PastedProductsType, Product, ProductTypes, ApiProductStates, ApiModalProduct } from '@common/index';
import * as _ from 'lodash';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state';
import { RequestProductsFromSellerApp, SetApiModalProducts, IsApiModalOpened } from '../state/products';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { tap } from 'rxjs/operators';
import { ConfirmationDialogData, ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog';

@AutoUnsubscribe()
@Component({
  selector: 'app-create-api-supported-products-dialog',
  templateUrl: './create-api-supported-products-dialog.html',
  styleUrls: ['./create-api-supported-products-dialog.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateApiSupportedProductsDialogComponent implements OnInit, OnDestroy {
  @ViewChild('asinsInput') asinsInput: ElementRef;

  products: ApiModalProduct[] = [];
  productTypes = ProductTypes;
  apiProductStates = ApiProductStates;
  errorMessage: string;
  displayedColumns = [
    'name',
    'asin',
    'retailHealth',
    'errors',
    'delete-button',
  ];
  counter: string;

  constructor(
    public dialogRef: MatDialogRef<CreateApiSupportedProductsDialogComponent>,
    private snackBar: MatSnackBar,
    private store$: Store<AppState>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(new IsApiModalOpened(true));

    this.store$.pipe(
      select(state => state.products.apiModalProducts),
    ).subscribe(products => {
      this.products = products;
      const loaded = _.filter(products, product => (product.state === this.apiProductStates.LOADED) && !product.error);
      this.counter = `${loaded.length} / ${products.length}`;
    });

    this.store$.pipe(
      select(state => state.products.errorMessage),
      tap(errorMessage => this.errorMessage = errorMessage)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.store$.dispatch(new SetApiModalProducts([]));
    this.store$.dispatch(new IsApiModalOpened(false));
  }


  paste(event: ClipboardEvent): void {
    event.preventDefault();
    this.errorMessage = null;

    const rawData = event.clipboardData
      .getData('Text');

    let rows = rawData
      .split(/[\n]/)
      .filter(row => row)
      .map(row => row.split(/[\t;]/));

    if (_.first(rows).length > 1) {
      this.errorMessage = 'You should paste only one column here.';
      return;
    }

    const header = _.get(rows, '[0][0]');
    const userIncludedAsinHeader = _(header).toLower().trim() === 'asin';
    if (userIncludedAsinHeader) { rows = _.tail(rows); }

    const data = _(rows)
      .map(row => _.first(row))
      .filter(asin => !!asin.match(/([A-Z0-9]{5,})/))
      .join(' ');

    this.asinsInput.nativeElement.value = `${this.asinsInput.nativeElement.value} ${data}`;
  }

  getAsinValues(value: string): Product['asin'][] {
    return _.uniq(value.match(/([A-Z0-9]{5,})/g));
  }

  submitForm(productsType: string): void {
    const products = _.filter(this.products, product =>
      (product.state === this.apiProductStates.LOADED) && !product.error
    );
    this.dialogRef.close({ products, type: productsType });
  }

  closeDialog(): void {
    if (_.isEmpty(this.products)) { return this.dialogRef.close(false); }
    const data: ConfirmationDialogData = {
      title: 'Cancel \'Add Products\'',
      text: 'Are you sure you want to CANCEL?\nThis will abort process of adding products.',
      confirmText: 'cancel',
      cancelText: 'go back',
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data,
    });

    dialogRef.afterClosed().subscribe(shouldCancel =>
      shouldCancel && this.dialogRef.close(false)
    );
  }

  deleteProduct(asin: string): void {
    const filtered = this.products.filter(product => product.asin !== asin);
    this.store$.dispatch(new SetApiModalProducts(filtered));
  }

  trackByFn(index: any, item: any): void {
    return item.asin;
  }

  addProductByInput(value: string): void {
    const asins = this.getAsinValues(value);
    const providedAsins = _.map(asins, asin => ({ asin }));
    this.addProductToList(providedAsins);
  }

  addProductToList(products: PastedProductsType): void {
    const newProductList = _.unionWith(this.products, products, (newProduct, currentProduct) => newProduct.asin === currentProduct.asin);
    this.snackBar.open(`Added ${newProductList.length - this.products.length} products`, '', { duration: 1000 });
    const asins = _.map(newProductList, product => product.asin);
    this.store$.dispatch(new RequestProductsFromSellerApp(asins));
    const listWithState = _.map(newProductList, product => ({
      ...product,
      state: ApiProductStates.REQUESTED,
    }));
    this.store$.dispatch(new SetApiModalProducts(listWithState));
  }

  refreshProduct({asin}: ApiModalProduct): void {
    this.store$.dispatch(new RequestProductsFromSellerApp([asin]));

    const listWithState = _.map(this.products, product => {
      return product.asin === asin ? { ...product, state: ApiProductStates.REQUESTED } : product;
    });

    this.store$.dispatch(new SetApiModalProducts(listWithState));
  }

  checkForWarning(product: ApiModalProduct): boolean {
    return (
      (product.state === this.apiProductStates.LOADED) &&
      (!product.name || !product.retailHealth) &&
      !product.error
      );
  }

  checkForError(product: ApiModalProduct): boolean {
    return (
      (product.state === this.apiProductStates.LOADED) &&
      !!product.error
      );
  }
}
