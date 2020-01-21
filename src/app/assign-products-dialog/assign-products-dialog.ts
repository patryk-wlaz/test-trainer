import * as _ from 'lodash';

import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSort } from '@angular/material';

import { SelectionModel } from '@angular/cdk/collections';
import { GetProductResDtoInterface, Product } from '@common/products';
import { ProductsEntities } from '@state/products';
import { GetKeywordResDtoInterface, ProductTypes } from '@common/index';

@Component({
  selector: 'app-assign-products-dialog',
  templateUrl: './assign-products-dialog.html',
  styleUrls: ['./assign-products-dialog.scss'],
})
export class AssignProductsDialogComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  selection: SelectionModel<Product['id']> = null;

  constructor (
    @Inject(MAT_DIALOG_DATA) public data: {
      productEntities: ProductsEntities;
      keyword: GetKeywordResDtoInterface;
    },
    public dialogRef: MatDialogRef<AssignProductsDialogComponent>
  ) { }

  ngOnInit(): void {
    this.prepareTable();
  }

  get brandProducts(): GetProductResDtoInterface[] {
    return _.orderBy(
      _.filter(this.data.productEntities, (product) => product.type === ProductTypes.BRAND),
      ['priority', 'name'], ['desc', 'asc'],
    );
  }

  private prepareTable(): void {
    this.selection = new SelectionModel<Product['id']>(true, _.map(this.data.keyword.products, (product) => product.id));
  }

  getSelectedProductName(productId: string): Product {
    return _.find(this.data.productEntities, (product) => product.id === productId);
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  confirmAssign(): void {
    this.dialogRef.close({
      productIds: this.selection.selected,
    });
  }
}
