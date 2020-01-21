import { environment } from 'src/environments/environment';

import { matchingPathname, MicrofrontendAppConfig, registerApp } from './utils';

const config: MicrofrontendAppConfig = {
  name: 'audiences-app',
  windowLibraryName: 'audiencesApp',
  assetsPath: 'microfrontends/audiences/',
  baseHref: '/audiences/:brandId',
  appUrl: environment.audiencesAppUrl,
  matchingStrategy: matchingPathname(['/audiences']),
};

export const registerAudiencesApp = (customParams?: any) =>
  registerApp({ ...config, customParams });
