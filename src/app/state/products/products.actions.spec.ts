import * as productsActions from './products.actions';

import { HttpErrorResponse } from '@angular/common/http';
import { ProductTypes } from '@common/index';

const addProductsSuccessPayload = {
  'products': [
    {
      'id': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
      'asin': 'AWE1231234',
      'type': 'BRAND' as ProductTypes,
      'priority': false,
      'campaignId': '9888dcb5-17d4-48b9-bbbf-6371ca0e99bd',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
    },
  ],
  'campaign': {
    'id': '9888dcb5-17d4-48b9-bbbf-6371ca0e99bd',
    'clientId': '612fc6ff-2045-4042-b68e-9280d5dae7f4',
    'startDate': new Date(),
    'endDate': new Date(),
    'name': 'Test 34',
    'marketId': 'b9267552-1986-4c95-b8da-46ed0826ae03',
    'currencyId': '1237',
    'description': 'd',
    'step': 1,
    'adsShare': [20, 50, 30],
    'active': true,
    'impressionShareStrategy': 'testImpressionShareStrategy',
    'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
    'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
    'createdAt': new Date(),
    'updatedAt': new Date(),
  },
};

describe('Store', () => {
  describe('Products', () => {
    describe('Actions', () => {
      describe('Load Products data', () => {
        it('should create an action', () => {
          const action = new productsActions.GetProductsByCampaign();

          expect({ ...action }).toEqual({
            type: productsActions.GET_PRODUCTS_BY_CAMPAIGN,
          });
        });
      });
      describe('Loaded Products data successfully', () => {
        it('should create an action', () => {
          const action = new productsActions.GetProductsByCampaignSuccess({ rows: [], count: 0 });

          expect({ ...action }).toEqual({
            type: productsActions.GET_PRODUCTS_BY_CAMPAIGN_SUCCESS,
            payload: { rows: [], count: 0 },
          });
        });
      });
      describe('Loaded Products data unsuccessfully', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({});
          const action = new productsActions.GetProductsByCampaignFail(payload);

          expect({ ...action }).toEqual({
            type: productsActions.GET_PRODUCTS_BY_CAMPAIGN_FAIL,
            payload,
          });
        });
      });

      describe('Add Products data', () => {
        it('should create an action', () => {
          const payload = {
            asins: ['1', '2', '3'],
            campaignId: '2',
            type: 'BRAND' as ProductTypes,
          };
          const action = new productsActions.AddProducts(payload);

          expect({ ...action }).toEqual({
            type: productsActions.ADD_PRODUCTS,
            payload,
          });
        });
      });
      describe('Added Products data successfully', () => {
        it('should create an action', () => {
          const action = new productsActions.AddProductsSuccess(addProductsSuccessPayload);

          expect({ ...action }).toEqual({
            type: productsActions.ADD_PRODUCTS_SUCCESS,
            payload: addProductsSuccessPayload,
          });
        });
      });
      describe('Added Products data unsuccessfully', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({});
          const action = new productsActions.AddProductsFail(payload);

          expect({ ...action }).toEqual({
            type: productsActions.ADD_PRODUCTS_FAIL,
            payload,
          });
        });
      });

      describe('Remove Product data', () => {
        it('should create an action', () => {
          const sampleId = '20';
          const action = new productsActions.RemoveProduct(sampleId);

          expect({ ...action }).toEqual({
            type: productsActions.REMOVE_PRODUCT,
            payload: sampleId,
          });
        });
      });
      describe('Removed Product data successfully', () => {
        it('should create an action', () => {
          const sampleId = '20';
          const action = new productsActions.RemoveProductSuccess(sampleId);

          expect({ ...action }).toEqual({
            type: productsActions.REMOVE_PRODUCT_SUCCESS,
            payload: sampleId,
          });
        });
      });
      describe('Removed Product data unsuccessfully', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({});
          const action = new productsActions.RemoveProductFail(payload);

          expect({ ...action }).toEqual({
            type: productsActions.REMOVE_PRODUCT_FAIL,
            payload,
          });
        });
      });
      describe('Update product', () => {
        it('should create an action', () => {
          const payload = { productId: '23232', productData: { retailHealth: 3, name: 'sss', priority: true } };
          const action = new productsActions.UpdateProduct(payload);

          expect({ ...action }).toEqual({
            type: productsActions.UPDATE_PRODUCT,
            payload,
          });
        });
      });
      describe('Update product success', () => {
        it('should create an action', () => {
          const payload = {
            id: '',
            name: 'ss',
            asin: '1231231231',
            retailHealth: 1,
            imageUrl: null,
            type: 'BRAND' as ProductTypes,
            priority: true,
            campaignId: '',
            createdBy: '',
            updatedBy: '',
            createdAt: new Date(),
            updatedAt: new Date(),
            campaign: {
              id: '',
              clientId: '',
              brandId: '',
              startDate: new Date(),
              endDate: new Date(),
              budget: 0,
              name: '',
              marketId: '',
              currencyId: '',
              description: '',
              step: 0,
              adsShare: [20, 50, 30],
              active: true,
              impressionShareStrategy: '',
              createdBy: '',
              updatedBy: '',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          };
          const action = new productsActions.UpdateProductSuccess(payload);

          expect({ ...action }).toEqual({
            type: productsActions.UPDATE_PRODUCT_SUCCESS,
            payload,
          });
        });
      });
      describe('Update product fail', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({});
          const action = new productsActions.UpdateProductFail(payload);

          expect({ ...action }).toEqual({
            type: productsActions.UPDATE_PRODUCT_FAIL,
            payload,
          });
        });
      });
    });
  });
});
