import { matchingPathname, MicrofrontendAppConfig, registerApp } from './utils';
import { environment } from 'src/environments/environment';

const config: MicrofrontendAppConfig = {
  name: 'wm-page-speed-insights-app',
  windowLibraryName: 'pageInsightsApp',
  assetsPath: environment.pageSpeedInsightsAssetsPath,
  baseHref: '/brands/:brandId/page-speed-insights/',
  appUrl: environment.pageSpeedInsightsAppUrl,
  matchingStrategy: matchingPathname(['/brands/']),
};

export const registerPageSpeedInsightsApp = (customParams?: any) =>
  registerApp({ ...config, customParams });
