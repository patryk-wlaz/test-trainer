// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  clientDataApiUrl: 'http://localhost:9000',
  audiencesAppUrl: 'https://home.hygienetools.com/microfrontends/audiences/main.js',
  budgetAppUrl: 'https://home.hygienetools.com/microfrontends/budget/main.js',
  growthOpportunitiesAppUrl:
    'https://home.hygienetools.com/microfrontends/wm-growth-opportunities/main.js',
  marketAdminAppUrl: 'https://home.hygienetools.com/microfrontends/market-admin/main.js',
  authAppUrl: '', // on localhost there is no use for this url - there's no authorization
  appName: '', // on localhost there is no use for this name - there's no authorization
  scorecardsAppUrl: 'https://home.hygienetools.com/microfrontends/scorecards/main.js',
  briefsAppUrl: 'https://home.hygienetools.com/microfrontends/briefs/main.js',
  pageSpeedInsightsAppUrl:
    'https://home.hygienetools.com/microfrontends/wm-page-speed-insights/main.js',
  production: false,
  matomoId: null, // correct id for flywheel dev is 21; use null on localhost
  pageSpeedInsightsAssetsPath: 'microfrontends/wm-page-speed-insights/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
