import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import {
  KeywordTypes,
  CreateKeywordsDtoInterface,
  Keyword,
  GetCampaignResDtoInterface,
  Product,
  GetProductsResDtoInterface,
} from '@common';
import * as _ from 'lodash';
import { AssignProductsDialogComponent } from '../assign-products-dialog/assign-products-dialog';
import { parseCtrValue } from 'app/shared/parsers/prase-ctr-value';
import { parseCpcValue } from 'app/shared/parsers/parse-cpc-value';
import { parseSearchVolume } from 'app/shared/parsers/parse-search-volume';

@Component({
  selector: 'app-create-keyword-dialog',
  templateUrl: './create-keyword-dialog.html',
  styleUrls: ['./create-keyword-dialog.scss'],
})
export class CreateKeywordDialogComponent {
  maxNameLength = 250;
  keywordTypes = KeywordTypes;
  acceptableHeaders = ['keyword', 'cpc', 'ctr', 'search volume'];
  headerToProp = {
    'keyword': 'name',
    'cpc': 'cpc',
    'ctr': 'ctr',
    'search volume': 'searchVolume',
  };
  displayedColumnsOrder = ['name', 'searchVolume', 'ctr', 'cpc', 'delete-button'];
  displayedColumns: string[];
  keywords: CreateKeywordsDtoInterface['keywords'] = [];
  errorMessage: string;
  currency: GetCampaignResDtoInterface['currency'];
  products: GetProductsResDtoInterface['rows'];
  selectedProducts: GetProductsResDtoInterface['rows'] = [];
  keywordsType = '';

  constructor(
    public dialogRef: MatDialogRef<CreateKeywordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      currency: GetCampaignResDtoInterface['currency'];
      products: GetProductsResDtoInterface['rows'];
    },
    public dialog: MatDialog
  ) {
    this.currency = data && data.currency;
    this.products = data && data.products;
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  keywordsHaveAdditionalParams(keywords: CreateKeywordsDtoInterface['keywords']) {
    return keywords.some(keyword => _.keys(keyword).length > 1);
  }

  addKeyword(value: string): void {
    this.errorMessage = null;

    if (value && !this.keywords.some(keyword => keyword.name === value)) {
      this.addKeywords([{ name: value }]);
    }
  }

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
        valid: _.includes(this.acceptableHeaders, _.toLower(_.trim(header))),
        index,
        header: _.toLower(_.trim(header)),
      }))
      .filter(header => header.valid);

    if (!rows.length) {
      return this.addKeywords([{ name: _.trim(rawData) }]);
    }

    const isValidHeader = !_.isEmpty(headers) && _.some(headers, header => header.header === 'keyword');

    if (!isValidHeader) {
      this.errorMessage = 'Pasted data should contain at least "Keyword" column';
      return;
    }

    const data = rows.map((row) =>
      headers.reduce((acc, header) => {
        acc[this.headerToProp[header.header]] = row[header.index];
        return acc;
      }, {}))
      .map((row: any) => ({
        ...row,
        ctr: parseCtrValue(row.ctr),
        cpc: parseCpcValue(row.cpc),
        searchVolume: parseSearchVolume(row.searchVolume),
      }))
      .filter((item: Pick<Keyword, 'name'>) => item && item.name);

    this.addKeywords(data);
  }

  deleteKeyword(value: string): void {
    this.keywords = this.keywords.filter(keyword => keyword.name !== value);
  }

  saveKeywords(): void {
    this.dialogRef.close({
      type: this.keywordsType,
      keywords: this.keywords,
      products: this.selectedProducts.map(product => product.id),
    });
  }

  addKeywords(keywords: CreateKeywordsDtoInterface['keywords']): void {
    this.keywords = _.uniqBy(keywords.concat(this.keywords), 'name');
    this.displayedColumns = _.intersection(
      this.displayedColumnsOrder,
      _.uniq(_.flatten(this.keywords.map(_.keys)).concat('delete-button')));
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  selectProducts() {
    const dialogRef = this.dialog.open(AssignProductsDialogComponent, {
      width: '90%',
      data: {
        productEntities: this.products.reduce((acc, product) => {
          acc[product.id] = product;
          return acc;
        }, {}),
        keyword: { products: this.selectedProducts },
      },
    });

    dialogRef.afterClosed().subscribe((data: { productIds: Product['id'][] }) => {
      if (data) {
        this.selectedProducts = this.products.filter(product => _.includes(data.productIds, product.id));
      }
    });
  }

  setKeywordsType(type: string): void {
    this.keywordsType = type;
  }
}
