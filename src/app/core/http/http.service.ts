import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseHttpService } from './base-http.service';

import { environment } from 'src/environments/environment';

import {
  CreateCampaignDtoInterface,
  CreateProductsDtoInterface,
  GetCampaignResDtoInterface,
  GetCampaignsResDtoInterface,
  GetClientsResDtoInterface,
  GetCurrenciesResDtoInterface,
  GetMarketsResDtoInterface,
  GetProductResDtoInterface,
  GetProductsResDtoInterface,
  CreateProductsResDtoInterface,
  UpdateProductDtoInterface,
  UpdateProductResDtoInterface,
  UpdateCampaignDtoInterface,
  DeleteProductResDtoInterface,
  Campaign,
  GetKeywordsResDtoInterface,
  CreateKeywordsDtoInterface,
  CreateKeywordsResDtoInterface,
  Keyword,
  UpdateKeywordDtoInterface,
  UpdateKeywordResDtoInterface,
  authFieldName,
  GetStrategiesResDtoInterface,
  GetStrategyResDtoInterface,
  BulkUpdateKeywordsDtoInterface,
  GetMyselfResInterface,
  Strategy,
  DuplicateCampaignResDtoInterface,
  RequestProductsFromSellerAppDtoInterface,
  RequestProductsFromSellerAppResDtoInterface,
  KeywordTypes,
  PickKeywordsFromSellerAppDtoInterface,
} from '@common';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { AppState } from 'app/state';

const authRegex = new RegExp(`${authFieldName}=([a-zA-Z0-9\\.\\-_]+)`);

@Injectable()
export class HttpService extends BaseHttpService {
  httpOptions = {
    withCredentials: true,
  };
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, store$: Store<AppState>) {
    super(store$);
  }

  getCampaigns(
    search: string = '',
    status: string = '',
    limit: number = 10,
    offset: number = 0,
    sort: string = ''): Observable<GetCampaignsResDtoInterface> {
    const request = this.http.get(`${this.apiUrl}/campaigns?withBudget`, {
      ...((search || status || limit || sort) && {
        params: {
          ...(search && { search }),
          ...(status && { status }),
          ...(sort && { sort }),
          limit: _.toString(limit),
          offset: _.toString(offset),
        },
      }),
      ...this.httpOptions,
    });
    return this.handleRequest(request);
  }

  getClients(search: string = ''): Observable<GetClientsResDtoInterface> {
    const request = this.http.get(`${this.apiUrl}/clients`, {
      ...(search && { params: { search } }),
      ...this.httpOptions,
    });
    return this.handleRequest(request);
  }

  getMarkets(search: string = ''): Observable<GetMarketsResDtoInterface> {
    const request = this.http.get(`${this.apiUrl}/markets`, {
      ...(search && { params: { search } }),
      ...this.httpOptions,
    });
    return this.handleRequest(request);
  }

  getCurrencies(): Observable<GetCurrenciesResDtoInterface> {
    const request = this.http.get(`${this.apiUrl}/currencies`, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  getProductsByCampaign(campaignId: string): Observable<GetProductsResDtoInterface> {
    const request = this.http.get(`${this.apiUrl}/campaigns/${campaignId}/products`, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  requestProductsFromSellerApp(
    data: RequestProductsFromSellerAppDtoInterface,
    scheduleIndexing?: boolean
  ): Observable<RequestProductsFromSellerAppResDtoInterface> {
    const suffix = scheduleIndexing
      ? '?scheduleIndexing=true'
      : '';
    const request = this.http.post(`${this.apiUrl}/products/requestFromSellerApp${suffix}`, data, {...this.httpOptions });
    return this.handleRequest(request);
  }

  addProducts(products: CreateProductsDtoInterface): Observable<CreateProductsResDtoInterface> {
    const request = this.http.post(`${this.apiUrl}/products`, products, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  removeProduct(id: GetProductResDtoInterface['id']): Observable<DeleteProductResDtoInterface> {
    const request = this.http.delete(`${this.apiUrl}/products/${id}`, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  getCampaign(id: GetCampaignResDtoInterface['id']): Observable<GetCampaignResDtoInterface> {
    const request = this.http.get(`${this.apiUrl}/campaigns/${id}`, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  saveCampaign(campaign: CreateCampaignDtoInterface): Observable<GetCampaignResDtoInterface> {
    const request = this.http.post(`${this.apiUrl}/campaigns`, campaign, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  duplicateCampaign(campaignId: Campaign['id']): Observable<DuplicateCampaignResDtoInterface> {
    const request = this.http.post(`${this.apiUrl}/campaigns/${campaignId}/duplicate`, {}, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  removeCampaign(campaignId: Campaign['id']): Observable<any> { // it returns just 204
    const request = this.http.delete(`${this.apiUrl}/campaigns/${campaignId}`, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  updateCampaign(id: GetCampaignResDtoInterface['id'], campaign: UpdateCampaignDtoInterface): Observable<GetCampaignResDtoInterface> {
    const request = this.http.put(`${this.apiUrl}/campaigns/${id}`, campaign, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  updateProduct(id: GetProductResDtoInterface['id'], product: UpdateProductDtoInterface): Observable<UpdateProductResDtoInterface> {
    const request = this.http.put(`${this.apiUrl}/products/${id}`, product, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  addKeywords(keywords: CreateKeywordsDtoInterface, campaignId: Campaign['id']): Observable<CreateKeywordsResDtoInterface> {
    const request = this.http.post(`${this.apiUrl}/campaigns/${campaignId}/keywords`, keywords, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  loadApiKeywords(data: PickKeywordsFromSellerAppDtoInterface, campaignId: Campaign['id']): Observable<CreateKeywordsResDtoInterface> {
    const request = this.http.post(
      `${this.apiUrl}/campaigns/${campaignId}/pickKeywordsFromSellerApp`,
      data,
      {...this.httpOptions }
    );
    return this.handleRequest(request);
  }

  getKeywords(campaignId: Campaign['id']): Observable<GetKeywordsResDtoInterface> {
    const request = this.http.get(`${this.apiUrl}/campaigns/${campaignId}/keywords`, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  getKeywordsWithStrategyData(campaignId: Campaign['id']): Observable<GetKeywordsResDtoInterface> {
    const request = this.http.get(`${this.apiUrl}/campaigns/${campaignId}/keywords`, {
      params: {
        offset: '0',
        limit: '99999',
        calculateBudget: 'true',
      },
      ...this.httpOptions,
    });

    return this.handleRequest(request);
  }

  updateKeyword(keywordId: Keyword['id'], keywordData: UpdateKeywordDtoInterface): Observable<UpdateKeywordResDtoInterface> {
    const request = this.http.put(`${this.apiUrl}/keywords/${keywordId}`, keywordData, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  updateKeywords(keywordData: BulkUpdateKeywordsDtoInterface): Observable<{
    keywords: UpdateKeywordResDtoInterface[],
    campaign: GetCampaignResDtoInterface
  }> {
    const request = this.http.put(`${this.apiUrl}/keywords`, keywordData, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  deleteKeyword(keywordId: Keyword['id']): Observable<null> {
    const request = this.http.delete(`${this.apiUrl}/keywords/${keywordId}`, { ...this.httpOptions });
    return this.handleRequest(request);
  }

  getMyself(): Observable<GetMyselfResInterface> {
    const request = this.http.get(`${this.apiUrl}/auth/myself`, this.httpOptions);
    return request as any; // it has its own handler in auth.guard
  }

  getVersion(): Observable<string> {
    const request = this.http.get(`${this.apiUrl}/version`, { ...this.httpOptions, responseType: 'text'});
    return this.handleRequest(request);
  }

  getGenericStrategies(): Observable<GetStrategiesResDtoInterface> {
    const request = this.http.get(`${this.apiUrl}/strategies`, this.httpOptions);
    return this.handleRequest(request);
  }

  getCampaignStrategies(campaignId: Campaign['id']): Observable<GetStrategyResDtoInterface[]> {
    const request = this.http.get(`${this.apiUrl}/campaigns/${campaignId}/strategies`, this.httpOptions);
    return this.handleRequest(request);
  }

  updateStrategy(strategyId: Strategy['id'], values: number[][]): Observable<{
    strategy: GetStrategyResDtoInterface,
    campaign: GetCampaignResDtoInterface
  }> {
    const request = this.http.put(
      `${this.apiUrl}/strategies/${strategyId}`,
      { values: JSON.stringify(values) },
      this.httpOptions);
    return this.handleRequest(request);
  }
}
