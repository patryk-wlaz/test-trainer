import * as ProductsModel from './products.model';
import * as ProductsActions from './products.actions';
import { ProductsState } from './products.model';
import { productsReducer } from './products.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductTypes } from '@common';

const addProductsPayload = {
  asins: ['QWE123', 'QWE124', 'QWE125'],
  campaignId: '1',
  type: 'BRAND' as ProductTypes,
};


const addProductsSuccessPayload = {
  'products': [
    {
      'id': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
      'name': 'some product name',
      'asin': 'ASIN12222456',
      'retailHealth': 10,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': true,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
    },
    {
      'id': '71b2d420-6389-4a54-89bc-52f770e66a45',
      'name': 'product',
      'asin': 'ASIN12222451',
      'retailHealth': 4,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': false,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
    },
    {
      'id': 'baf4084a-0550-4732-87c7-e172ba76f16e',
      'name': 'product',
      'asin': 'ASIN12222455',
      'retailHealth': 2,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': false,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
    },
    {
      'id': '65765d13-116e-4bac-88c7-12c9a8900610',
      'name': 'product',
      'asin': 'ASIN12222453',
      'retailHealth': 3,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': true,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
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
    describe('Reducer', () => {
      describe('undefined action', () => {
        it('should return the default state', () => {
          const { initialState } = ProductsModel;
          const action = {} as any;
          const state: ProductsState = productsReducer(undefined, action);

          expect(state).toBe(initialState);
        });
      });

      describe('[Products] Get All', () => {
        let state = ProductsModel.initialState;

        beforeAll(() => {
          const error = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const errorAction = new ProductsActions.GetProductsByCampaignFail(error);
          state = productsReducer(state, errorAction);

          const action = new ProductsActions.GetProductsByCampaign();
          state = productsReducer(state, action);
        });

        it('should set isLoading to true', () => {
          expect(state.isLoading).toEqual(true);
        });
        it('should set errorMessage to null', () => {
          expect(state.errorMessage).toEqual(null);
        });
        it('should set list to empty array', () => {
          const loadSuccessAction = new ProductsActions.GetProductsByCampaignSuccess({
            rows: [{
              id: '',
              asin: '',
              type: 'BRAND' as ProductTypes,
              campaignId: '1',
              createdBy: '',
              updatedBy: '',
              createdAt: new Date(),
              updatedAt: new Date(),
            }],
            count: 1,
          });
          state = productsReducer(state, loadSuccessAction);

          const loadAction = new ProductsActions.GetProductsByCampaign();
          state = productsReducer(state, loadAction);

          expect(state.list).toEqual([]);
        });
      });
      describe('[Products] Get All Success', () => {
        let state = ProductsModel.initialState;

        beforeAll(() => {
          const getProductsAction = new ProductsActions.GetProductsByCampaign();
          state = productsReducer(state, getProductsAction);

          const action = new ProductsActions.GetProductsByCampaignSuccess({ rows: [], count: 0 });
          state = productsReducer(state, action);
        });

        it('should set isLoading to false', () => {
          expect(state.isLoading).toEqual(false);
        });
        it('should set provided payload to "all"', () => {
          expect(state.list).toEqual([]);
        });
      });
      describe('[Products] Get All Fail', () => {
        let state = ProductsModel.initialState;

        beforeAll(() => {
          const getProductsAction = new ProductsActions.GetProductsByCampaign();
          state = productsReducer(state, getProductsAction);

          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const getProductsFailAction = new ProductsActions.GetProductsByCampaignFail(payload);
          state = productsReducer(state, getProductsFailAction);
        });

        it('should set isLoading to false', () => {
          expect(state.isLoading).toEqual(false);
        });
        it('should set error message', () => {
          expect(state.errorMessage).toEqual('test 404 error');
        });
      });

      describe('[Products] Add products', () => {
        let state = ProductsModel.initialState;
        beforeAll(() => {
          const addProductsSuccess = new ProductsActions.AddProductsSuccess(addProductsSuccessPayload);
          state = productsReducer(state, addProductsSuccess);

          const action = new ProductsActions.AddProducts(addProductsPayload);
          state = productsReducer(state, action);
        });

        it('should set isLoading to true', () => {
          expect(state.isLoading).toEqual(true);
        });
        it('should set errorMessage to null', () => {
          const error = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const errorAction = new ProductsActions.AddProductsFail(error);
          state = productsReducer(state, errorAction);

          const loadAction = new ProductsActions.AddProducts(addProductsPayload);
          state = productsReducer(state, loadAction);

          expect(state.errorMessage).toEqual(null);
        });
        it('shouldn\'t touch list', () => {
          expect(state.list).toEqual(addProductsSuccessPayload.products);
        });
      });
      describe('[Products] Add products Success', () => {
        let state = ProductsModel.initialState;
        beforeAll(() => {
          const action = new ProductsActions.AddProducts(addProductsPayload);
          state = productsReducer(state, action);

          const addProductsSuccess = new ProductsActions.AddProductsSuccess(addProductsSuccessPayload);
          state = productsReducer(state, addProductsSuccess);
        });

        it('should set isLoading to false', () => {
          expect(state.isLoading).toEqual(false);
        });
        it('should attach provided payload to "all"', () => {
          const secondLoadPayload = {
            'products': [
              {
                'id': 'e07a236c-3c1d-4f04-ba3d-f201fddcb32c',
                'asin': 'AWE1251234',
                'type': 'BRAND' as ProductTypes,
                'priority': false,
                'campaignId': '9888dcb5-17d4-48b9-bbbf-6371ca0e99bd',
                'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
                'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
                'createdAt': new Date(),
                'updatedAt': new Date(),
              },
              {
                'id': '3c23a2da-7c80-4244-aa46-6066006d0e14',
                'asin': 'AWE1251239',
                'type': 'BRAND' as ProductTypes,
                'priority': false,
                'campaignId': '9888dcb5-17d4-48b9-bbbf-6371ca0e99bd',
                'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
                'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
                'createdAt': new Date(),
                'updatedAt': new Date(),
              },
              {
                'id': 'dfb047de-bd83-47fb-ad53-ab245414d6e7',
                'asin': 'AWE1251235',
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
          const secondLoad = new ProductsActions.AddProductsSuccess(secondLoadPayload);
          state = productsReducer(state, secondLoad);

          expect(state.list).toEqual([...addProductsSuccessPayload.products, ...secondLoadPayload.products]);
        });
      });
      describe('[Products] Add products Fail', () => {
        let state = ProductsModel.initialState;
        beforeAll(() => {
          const addProducts = new ProductsActions.AddProducts(addProductsPayload);
          state = productsReducer(state, addProducts);

          const addProductsSuccess = new ProductsActions.AddProductsSuccess(addProductsSuccessPayload);
          state = productsReducer(state, addProductsSuccess);

          const action = new ProductsActions.AddProducts(addProductsPayload);
          state = productsReducer(state, action);

          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const failAction = new ProductsActions.AddProductsFail(payload);
          state = productsReducer(state, failAction);
        });

        it('should set isLoading to false', () => {
          expect(state.isLoading).toEqual(false);
        });
        it('should set error message', () => {
          expect(state.errorMessage).toEqual('test 404 error');
        });
        it('shouldn\'t touch list', () => {
          expect(state.list).toEqual(addProductsSuccessPayload.products);
        });
      });

      describe('[Products] Remove product', () => {
        let state = ProductsModel.initialState;
        const sampleId = '2';

        beforeAll(() => {
          const addProductsAction = new ProductsActions.AddProductsSuccess(addProductsSuccessPayload);
          state = productsReducer(state, addProductsAction);

          const removeAction = new ProductsActions.RemoveProduct(sampleId);
          state = productsReducer(state, removeAction);
        });

        it('should set isLoading to true', () => {
          expect(state.isLoading).toEqual(true);
        });
        it('should set errorMessage to null', () => {
          const error = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });

          const errorAction = new ProductsActions.RemoveProductFail(error);
          state = productsReducer(state, errorAction);

          const action = new ProductsActions.RemoveProduct(sampleId);
          state = productsReducer(state, action);

          expect(state.errorMessage).toEqual(null);
        });
        it('shouldn\'t touch list', () => {
          expect(state.list).toEqual(addProductsSuccessPayload.products);
        });
      });
      describe('[Products] Remove product Success', () => {
        let state = ProductsModel.initialState;
        const sampleId = '2';

        beforeAll(() => {
          const addProductsAction = new ProductsActions.AddProductsSuccess(addProductsSuccessPayload);
          state = productsReducer(state, addProductsAction);

          const removeAction = new ProductsActions.RemoveProduct(sampleId);
          state = productsReducer(state, removeAction);
          const successAction = new ProductsActions.RemoveProductSuccess(sampleId);
          state = productsReducer(state, successAction);
        });

        it('should set isLoading to false', () => {
          expect(state.isLoading).toEqual(false);
        });
        it('should remove product with provided ID from list', () => {
          expect(state.list.map(item => item.id).indexOf('2')).toEqual(-1);
        });
      });
      describe('[Products] Remove product Fail', () => {
        let state = ProductsModel.initialState;
        const sampleId = '2';

        beforeAll(() => {
          const addProductsAction = new ProductsActions.AddProductsSuccess(addProductsSuccessPayload);
          state = productsReducer(state, addProductsAction);

          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const removeAction = new ProductsActions.RemoveProduct(sampleId);
          state = productsReducer(state, removeAction);

          const action = new ProductsActions.RemoveProductFail(payload);
          state = productsReducer(state, action);
        });

        it('should set isLoading to false', () => {
          expect(state.isLoading).toEqual(false);
        });
        it('should set error message', () => {
          expect(state.errorMessage).toEqual('test 404 error');
        });
        it('shouldn\'t touch list', () => {
          expect(state.list).toEqual(addProductsSuccessPayload.products);
        });
      });
    });
  });
});
