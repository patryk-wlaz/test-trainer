import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, mergeMap, withLatestFrom, concatMap, delay, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as ProductsActions from './products.actions';
import * as CampaignsActions from '../campaign/campaign.actions';
import { HttpService } from 'app/core/http/http.service';
import {
  GetProductsResDtoInterface,
  CreateProductsResDtoInterface,
  UpdateProductResDtoInterface,
  DeleteProductResDtoInterface, CreateProductsDtoInterface, RequestProductsFromSellerAppResDtoInterface,
} from '@common';
import { AppState } from 'app/state';
import * as _ from 'lodash';
import { checkUnfinishedAsinsInterval } from './products.model';

@Injectable()
export class ProductsEffects {
  constructor(
    private store$: Store<AppState>,
    private actions$: Actions<ProductsActions.All>,
    private http: HttpService
  ) {}

  @Effect() getProducts: Observable<Action> = this.actions$.pipe(
    ofType(ProductsActions.GET_PRODUCTS_BY_CAMPAIGN),
    withLatestFrom(this.store$),
    switchMap(([action, store]: [ProductsActions.GetProductsByCampaign, AppState]) =>
      this.http.getProductsByCampaign(store.campaign.campaign.id).pipe(
        map(
          (response: GetProductsResDtoInterface) =>
            new ProductsActions.GetProductsByCampaignSuccess(response)
        ),
        catchError(err => of(new ProductsActions.GetProductsByCampaignFail(err)))
      ))
  );

  @Effect() addProducts: Observable<Action> = this.actions$.pipe(
    ofType(ProductsActions.ADD_PRODUCTS),
    withLatestFrom(this.store$),
    map(([action, store]: [ProductsActions.AddProducts, AppState]) => ({
      ...action.payload,
      campaignId: store.campaign.campaign.id,
    })),
    switchMap((data: CreateProductsDtoInterface) => this.http.addProducts(data)
      .pipe(
        mergeMap((response: CreateProductsResDtoInterface) => [
          new ProductsActions.AddProductsSuccess(response),
          new CampaignsActions.GetCampaignSuccess(response.campaign),
        ]),
        catchError(err => of(new ProductsActions.AddProductsFail(err)))
      ))
  );

  @Effect() updateProduct: Observable<Action> = this.actions$.pipe(
    ofType(ProductsActions.UPDATE_PRODUCT),
    map((action: ProductsActions.UpdateProduct) => action.payload),
    concatMap(({ productId, productData }) =>
      this.http.updateProduct(productId, productData).pipe(
        mergeMap((response: UpdateProductResDtoInterface) => [
          new ProductsActions.UpdateProductSuccess(response),
          new CampaignsActions.GetCampaignSuccess(response.campaign),
        ]),
        catchError(err => of(new ProductsActions.UpdateProductFail(err)))
      )
    )
  );

  @Effect() removeProduct: Observable<Action> = this.actions$.pipe(
    ofType(ProductsActions.REMOVE_PRODUCT),
    switchMap((action: ProductsActions.RemoveProduct) =>
      this.http.removeProduct(action.payload).pipe(
        mergeMap((response: DeleteProductResDtoInterface) => [
          new ProductsActions.RemoveProductSuccess(action.payload),
          new CampaignsActions.GetCampaignSuccess(response.campaign),
        ]),
        catchError(err => of(new ProductsActions.RemoveProductFail(err)))
      ))
  );

  @Effect() requestProductsFromSellerApp: Observable<Action> = this.actions$.pipe(
    ofType(ProductsActions.REQUEST_PRODUCTS_FROM_SELLER_APP),
    withLatestFrom(this.store$),
    switchMap(([action, store]: [ProductsActions.RequestProductsFromSellerApp, AppState]) =>
      this.http.requestProductsFromSellerApp({ asins: action.payload }, true).pipe(
        map((response: RequestProductsFromSellerAppResDtoInterface) => new ProductsActions.RequestProductsFromSellerAppSuccess(response)),
        catchError(err => of(new ProductsActions.RequestProductsFromSellerAppFail(err)))
      ))
  );

  @Effect() requestProductsFromSellerAppSuccess: Observable<Action> = this.actions$.pipe(
    ofType(ProductsActions.REQUEST_PRODUCTS_FROM_SELLER_APP_SUCCESS),
    withLatestFrom(this.store$),
    switchMap(([action, store]: [ProductsActions.RequestProductsFromSellerAppSuccess, AppState]) => {
      if (!store.products.apiModalIsOpened || _.isEmpty(action.payload.unfinished)) { return of({ type: 'NOOP' }); }
      const asins = _.map(action.payload.unfinished, asinData => asinData.asin);
      return of(null).pipe(
        delay(checkUnfinishedAsinsInterval),
        switchMap(() => this.http.requestProductsFromSellerApp({ asins }).pipe(
          map((response) => new ProductsActions.RequestProductsFromSellerAppSuccess(response)),
          catchError(err => of(new ProductsActions.RequestProductsFromSellerAppFail(err)))
        ))
      );
    })
  );
}
