import { matchingPathname, MicrofrontendAppConfig, registerApp } from './utils';
import { environment } from 'src/environments/environment';

const config: MicrofrontendAppConfig = {
  name: 'market-admin-app',
  windowLibraryName: 'marketAdminApp',
  assetsPath: 'microfrontends/market-admin/',
  baseHref: '/market-admin',
  appUrl: environment.marketAdminAppUrl,
  matchingStrategy: matchingPathname(['/market-admin']),
};

export const registerMarketAdminApp = () => registerApp(config);
