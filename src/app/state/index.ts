import { storeFreeze } from 'ngrx-store-freeze';

import { localStorageSyncReducer } from './local-storage/local-storage-sync.meta-reducer';
import { RouterEffects } from './router';
import { environment } from 'src/environments/environment';
import {
  SettingsEffects,
  SettingsState,
  settingsReducer,
} from './settings';
import {
  CampaignsEffects,
  campaignsReducer,
  CampaignsState,
} from './campaigns';
import {
  ClientsEffects,
  clientsReducer,
  ClientsState,
} from './clients';
import {
  CampaignEffects,
  campaignReducer,
  CampaignState,
} from './campaign';
import {
  MarketsEffects,
  marketsReducer,
  MarketsState,
} from './markets';
import {
  CurrenciesEffects,
  currenciesReducer,
  CurrenciesState,
} from './currencies';
import {
  ProductsEffects,
  productsReducer,
  ProductsState,
} from './products';

import {
  KeywordsEffects,
  keywordsReducer,
  KeywordsState,
} from './keywords';
import {
  AuthState,
  authReducer,
  AuthEffects,
} from './auth';

import {
  StrategiesState,
  strategiesReducer,
  StrategiesEffects,
} from './strategies';

export const reducers = {
  settings: settingsReducer,
  campaigns: campaignsReducer,
  campaign: campaignReducer,
  clients: clientsReducer,
  markets: marketsReducer,
  currencies: currenciesReducer,
  products: productsReducer,
  keywords: keywordsReducer,
  auth: authReducer,
  strategies: strategiesReducer,
};

export const effects = [
  SettingsEffects,
  RouterEffects,
  CampaignsEffects,
  CampaignEffects,
  ClientsEffects,
  MarketsEffects,
  CurrenciesEffects,
  ProductsEffects,
  KeywordsEffects,
  AuthEffects,
  StrategiesEffects,
];

export const metaReducers = [...(!environment.production ? [storeFreeze] : []), localStorageSyncReducer];

export interface AppState {
  settings: SettingsState;
  campaigns: CampaignsState;
  campaign: CampaignState;
  clients: ClientsState;
  markets: MarketsState;
  currencies: CurrenciesState;
  products: ProductsState;
  keywords: KeywordsState;
  auth: AuthState;
  strategies: StrategiesState;
}
