import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { MIN_RH, PastedProductsType, Product, ProductTypes } from '@common/index';
import * as _ from 'lodash';
import { parseRhValue } from 'app/shared/parsers/parse-retail-health-value';

@Component({
  selector: 'app-create-products-dialog',
  templateUrl: './create-products-dialog.html',
  styleUrls: ['./create-products-dialog.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateProductsDialogComponent {
  products: PastedProductsType = [];
  productTypes = ProductTypes;
  acceptableHeaders = ['product name', 'asin', 'rh'];
  headerToProp = {
    'product name': 'name',
    'asin': 'asin',
    'rh': 'retailHealth',
  };
  maxNameLength = 200;
  errorMessage: string;
  displayedColumns = [
    'name',
    'asin',
    'retailHealth',
    'delete-button',
  ];

  constructor(
    public dialogRef: MatDialogRef<CreateProductsDialogComponent>,
    private snackBar: MatSnackBar
  ) {}

  paste(event: ClipboardEvent): void {
    event.preventDefault();
    this.errorMessage = null;

    const rawData = event.clipboardData
      .getData('Text');

    const rows = rawData
      .split(/[\n]/)
      .filter(row => row)
      .map(row => row.split(/[\t;]/));

    const headers = rows.shift()
      .map((header, index) => ({
        index,
        valid: _.includes(this.acceptableHeaders, _.toLower(_.trim(header))),
        header: _.toLower(_.trim(header)),
      }))
      .filter(header => header.valid);

    const isValidHeader = !_.isEmpty(headers) && _.some(headers, header => header.header === 'asin');

    if (!isValidHeader) {
      this.errorMessage = 'Pasted data should contain at least "ASIN" column';
      return;
    }

    const data = rows.map((row) =>
      headers.reduce((acc, header) => {
        acc[this.headerToProp[header.header]] = row[header.index];
        return acc;
      }, {}))
      .map((row: any) => ({
        ...row,
        name: _.truncate(row.name, {
          length: this.maxNameLength,
          omission: '',
        }),
        retailHealth: row.retailHealth && parseRhValue(row.retailHealth),
      }))
      .filter(({ asin }) => asin.match(/([A-Z0-9]{5,})/));

    this.addProductToList(data);
  }

  getAsinValues(value: string): Product['asin'][] {
    return _.uniq(value.match(/([A-Z0-9]{5,})/g));
  }

  submitForm(productsType: string): void {
    this.dialogRef.close({ products: this.products, type: productsType });
    this.products = [];
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  deleteProduct(asin: string) {
    this.products = this.products.filter(product => product.asin !== asin);
  }

  trackByFn(index: any, item: any) {
    return item.asin;
  }

  addProductByInput(value: string) {
    const asins = this.getAsinValues(value);
    const providedAsins = _.map(asins, asin => ({ asin }));
    this.addProductToList(providedAsins);
  }

  addProductToList(products: PastedProductsType) {
    const newProductList = _.unionWith(this.products, products, (newProduct, currentProduct) => newProduct.asin === currentProduct.asin);
    this.snackBar.open(`Added ${newProductList.length - this.products.length} products`, '', { duration: 1000 });
    this.products = newProductList;
  }
}
