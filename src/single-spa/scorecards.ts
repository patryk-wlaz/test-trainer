import { matchingPathname, registerApp, MicrofrontendAppConfig } from './utils';
import { environment } from '../environments/environment';

const config: MicrofrontendAppConfig = {
  name: 'scorecards-app',
  windowLibraryName: 'scorecardsApp',
  assetsPath: 'microfrontends/scorecards/',
  baseHref: '/scorecards/:brandId',
  appUrl: environment.scorecardsAppUrl,
  appLocation: environment.scorecardsAppUrl.replace('main.js', ''),
  matchingStrategy: matchingPathname(['/scorecards']),
};

export const registerScorecardsApp = (customParams?: any) =>
  registerApp({ ...config, customParams });
