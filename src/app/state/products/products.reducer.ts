import * as _ from 'lodash';

import * as ProductsActions from './products.actions';

import { initialState, ProductsState } from './products.model';
import {
  GetProductsResDtoInterface,
  GetProductResDtoInterface,
  CreateProductsResDtoInterface,
  UpdateProductResDtoInterface,
  ApiModalProduct,
  RequestProductsFromSellerAppResDtoInterface,
  ApiProductStates,
} from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export type Action = ProductsActions.All;

const reducerMap = {
  [ProductsActions.GET_PRODUCTS_BY_CAMPAIGN]: (state: ProductsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
    list: [],
  }),
  [ProductsActions.GET_PRODUCTS_BY_CAMPAIGN_SUCCESS]: (state: ProductsState, payload: GetProductsResDtoInterface) => ({
    ...state,
    list: payload.rows,
    isLoading: false,
    errorMessage: null,
  }),
  [ProductsActions.GET_PRODUCTS_BY_CAMPAIGN_FAIL]: (state: ProductsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),
  [ProductsActions.ADD_PRODUCTS]: (state: ProductsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [ProductsActions.ADD_PRODUCTS_SUCCESS]: (state: ProductsState, payload: CreateProductsResDtoInterface) => ({
    ...state,
    isLoading: false,
    errorMessage: null,
    list: [...payload.products, ...state.list],
  }),
  [ProductsActions.ADD_PRODUCTS_FAIL]: (state: ProductsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),
  [ProductsActions.UPDATE_PRODUCT]: (state: ProductsState, payload) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [ProductsActions.UPDATE_PRODUCT_SUCCESS]: (state: ProductsState, payload: UpdateProductResDtoInterface) => ({
    ...state,
    list: _.map(state.list, product => (product.id === payload.id)
      ? _.assign({}, product, payload)
      : product),
    isLoading: false,
    errorMessage: null,
  }),
  [ProductsActions.UPDATE_PRODUCT_FAIL]: (state: ProductsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),

  [ProductsActions.REMOVE_PRODUCT]: (state: ProductsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [ProductsActions.REMOVE_PRODUCT_SUCCESS]: (state: ProductsState, removedProductId: GetProductResDtoInterface['id']) => {
    const oldList = state.list;
    const updatedList = _.filter(oldList, product => product.id !== removedProductId);
    return ({
      ...state,
      list: updatedList,
      isLoading: false,
      errorMessage: null,
    });
  },
  [ProductsActions.REMOVE_PRODUCT_FAIL]: (state: ProductsState, payload: HttpErrorResponse) => {
    return ({
      ...state,
      isLoading: false,
      errorMessage: payload.error,
    });
  },
  [ProductsActions.SET_API_MODAL_PRODUCTS]: (state: ProductsState, payload: ApiModalProduct[]) => {
    return ({
      ...state,
      apiModalProducts: payload,
    });
  },
  [ProductsActions.REQUEST_PRODUCTS_FROM_SELLER_APP_FAIL]: (state: ProductsState, payload: HttpErrorResponse) => {
    return ({
      ...state,
      errorMessage: payload.error.message,
      apiModalProducts: [],
    });
  },
  [ProductsActions.REQUEST_PRODUCTS_FROM_SELLER_APP_SUCCESS]: (
      state: ProductsState,
      payload: RequestProductsFromSellerAppResDtoInterface
    ) => {
    if (!state.apiModalIsOpened) { return state; } // in case response from BE comes after user closes modal
    const finished = _.map(payload.finished, asinData => ({
      asin: asinData.asin,
      name: asinData.data.title,
      retailHealth: asinData.data.lqi,
      error: asinData.data.error,
      state: ApiProductStates.LOADED,
      imageUrl: asinData.data.product_image_url,
      keywords: asinData.data.keyword_list,
    }));
    const apiModalProducts = _.uniqBy([...finished, ...state.apiModalProducts], 'asin');

    return {
      ...state,
      apiModalProducts,
    };
  },
  [ProductsActions.IS_API_MODAL_OPENED]: (state: ProductsState, payload: boolean) => {
    return ({
      ...state,
      apiModalIsOpened: payload,
      errorMessage: null,
    });
  },
};

export function productsReducer(state: ProductsState = initialState, action: any): ProductsState {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
