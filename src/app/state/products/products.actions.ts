import { Action } from '@ngrx/store';
import {
  CreateProductsDtoInterface,
  GetProductResDtoInterface,
  GetProductsResDtoInterface,
  CreateProductsResDtoInterface,
  UpdateProductDtoInterface,
  UpdateProductResDtoInterface,
  Product,
  PastedProductsType,
  RequestProductsFromSellerAppResDtoInterface,
} from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export const GET_PRODUCTS_BY_CAMPAIGN = '[Products] Get products by campaign';
export const GET_PRODUCTS_BY_CAMPAIGN_SUCCESS = '[Products] Get products by campaign success';
export const GET_PRODUCTS_BY_CAMPAIGN_FAIL = '[Products] Get products by campaign fail';

export const ADD_PRODUCTS = '[Products] Add products';
export const ADD_PRODUCTS_SUCCESS = '[Products] Add products success';
export const ADD_PRODUCTS_FAIL = '[Products] Add products fail';

export const UPDATE_PRODUCT = '[Products] Update product';
export const UPDATE_PRODUCT_SUCCESS = '[Products] Update product success';
export const UPDATE_PRODUCT_FAIL = '[Products] Update product fail';

export const REMOVE_PRODUCT = '[Products] Remove product';
export const REMOVE_PRODUCT_SUCCESS = '[Products] Remove product success';
export const REMOVE_PRODUCT_FAIL = '[Products] Remove product fail';

export const REQUEST_PRODUCTS_FROM_SELLER_APP = '[Products] Get product from Seller App';
export const REQUEST_PRODUCTS_FROM_SELLER_APP_SUCCESS = '[Products] Get product from Seller App success';
export const REQUEST_PRODUCTS_FROM_SELLER_APP_FAIL = '[Products] Get product from Seller App fail';
export const SET_API_MODAL_PRODUCTS = '[Products] Set API Modal Products';
export const IS_API_MODAL_OPENED = '[Products] Is API Modal Opened';

export class GetProductsByCampaign implements Action {
  readonly type = GET_PRODUCTS_BY_CAMPAIGN;

  constructor(readonly payload?: null) {}
}

export class GetProductsByCampaignSuccess implements Action {
  readonly type = GET_PRODUCTS_BY_CAMPAIGN_SUCCESS;

  constructor(readonly payload: GetProductsResDtoInterface) {}
}

export class GetProductsByCampaignFail implements Action {
  readonly type = GET_PRODUCTS_BY_CAMPAIGN_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export class AddProducts implements Action {
  readonly type = ADD_PRODUCTS;

  constructor(readonly payload: Pick<CreateProductsDtoInterface, 'data' | 'type'>) {}
}

export class AddProductsSuccess implements Action {
  readonly type = ADD_PRODUCTS_SUCCESS;

  constructor(readonly payload: CreateProductsResDtoInterface) {}
}

export class AddProductsFail implements Action {
  readonly type = ADD_PRODUCTS_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}


export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;

  constructor(readonly payload: { productId: Product['id'], productData: UpdateProductDtoInterface }) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = UPDATE_PRODUCT_SUCCESS;

  constructor(readonly payload: UpdateProductResDtoInterface) {}
}

export class UpdateProductFail implements Action {
  readonly type = UPDATE_PRODUCT_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;

  constructor(readonly payload: GetProductResDtoInterface['id']) {}
}

export class RemoveProductSuccess implements Action {
  readonly type = REMOVE_PRODUCT_SUCCESS;

  constructor(readonly payload: GetProductResDtoInterface['id']) {}
}

export class RemoveProductFail implements Action {
  readonly type = REMOVE_PRODUCT_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export class RequestProductsFromSellerApp implements Action {
  readonly type = REQUEST_PRODUCTS_FROM_SELLER_APP;

  constructor(readonly payload: Product['asin'][]) {}
}

export class RequestProductsFromSellerAppSuccess implements Action {
  readonly type = REQUEST_PRODUCTS_FROM_SELLER_APP_SUCCESS;

  constructor(readonly payload: RequestProductsFromSellerAppResDtoInterface) {}
}

export class RequestProductsFromSellerAppFail implements Action {
  readonly type = REQUEST_PRODUCTS_FROM_SELLER_APP_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export class SetApiModalProducts implements Action {
  readonly type = SET_API_MODAL_PRODUCTS;

  constructor(readonly payload: PastedProductsType) {}
}

export class IsApiModalOpened implements Action {
  readonly type = IS_API_MODAL_OPENED;

  constructor(readonly payload: boolean) {}
}

export type All =
  | GetProductsByCampaign
  | GetProductsByCampaignSuccess
  | GetProductsByCampaignFail

  | AddProducts
  | AddProductsSuccess
  | AddProductsFail

  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail

  | RemoveProduct
  | RemoveProductSuccess
  | RemoveProductFail

  | RequestProductsFromSellerApp
  | RequestProductsFromSellerAppSuccess
  | RequestProductsFromSellerAppFail

  | SetApiModalProducts
  | IsApiModalOpened;
