import { GetProductResDtoInterface, GetProductsResDtoInterface, ProductTypes, ApiModalProduct } from '@common';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';

export type ProductsState = Readonly<{
  list: GetProductsResDtoInterface['rows'];
  isLoading: boolean;
  errorMessage: string | null;
  apiModalProducts: ApiModalProduct[];
  apiModalIsOpened: boolean;
}>;

export const initialState: ProductsState = {
  list: [],
  isLoading: false,
  errorMessage: null,
  apiModalProducts: [],
  apiModalIsOpened: false,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

export interface ProductsEntities {
  [id: string]: GetProductResDtoInterface;
}

export const getProductsEntities = createSelector(
  getProductsState,
  (state: ProductsState) => state.list
    .reduce((entities: ProductsEntities, product: GetProductResDtoInterface) => ({
      ...entities,
      [product.id]: product,
    }), {})
);

export const getProductsByType = (type: ProductTypes) => createSelector(
  getProductsState,
  (state: ProductsState) => _.filter(state.list, { type })
);

export const checkUnfinishedAsinsInterval = 10000;
