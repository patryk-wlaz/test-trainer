import { matchingPathname, registerApp, MicrofrontendAppConfig } from './utils';
import { environment } from 'src/environments/environment';

const config: MicrofrontendAppConfig = {
  name: 'budget-app',
  windowLibraryName: 'budgetApp',
  assetsPath: 'microfrontends/budget/',
  baseHref: '/budget',
  appUrl: environment.budgetAppUrl,
  matchingStrategy: matchingPathname(['/budget']),
};

export const registerBudgetApp = () => registerApp(config);
