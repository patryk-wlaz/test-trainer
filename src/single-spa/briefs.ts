import { matchingPathname, MicrofrontendAppConfig, registerApp } from './utils';
import { environment } from 'src/environments/environment';

const config: MicrofrontendAppConfig = {
  name: 'briefs-app',
  windowLibraryName: 'briefsApp',
  assetsPath: 'microfrontends/briefs/',
  baseHref: '/briefs/:brandId',
  appUrl: environment.briefsAppUrl,
  appLocation: environment.briefsAppUrl.replace('main.js', ''),
  matchingStrategy: matchingPathname(['/briefs']),
};

export const registerBriefsApp = (customParams?: any) => registerApp({ ...config, customParams });
