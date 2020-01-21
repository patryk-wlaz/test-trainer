import { matchingPathname, MicrofrontendAppConfig, registerApp } from './utils';
import { environment } from 'src/environments/environment';

const config: MicrofrontendAppConfig = {
  name: 'wm-growth-opportunities-app',
  windowLibraryName: 'wmGrowthOpportunitiesApp',
  assetsPath: 'microfrontends/wm-growth-opportunities/',
  baseHref: '/growth-opportunities/:brandId',
  appUrl: environment.growthOpportunitiesAppUrl,
  matchingStrategy: matchingPathname(['/growth-opportunities']),
};

export const registerGrowthOpportunitiesApp = () => registerApp(config);
