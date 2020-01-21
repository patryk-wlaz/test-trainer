/*
This file can be replaced during build by using the `fileReplacements` array.
`ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
The list of file replacements can be found in `angular.json`.
Deployment environments use files commited to repo, eg. environment.production.
Locally you would like to copy this file (environment.example.ts),
name it as environment.ts and change according to your needs.

Existence of this file is needed by CI (content doesn't matter), therefore it can't be gitignored.
Cast a spell in your local repository: git update-index --skip-worktree {{path/to/environment.ts}} before changing this file.

apiUrl should probably be imported from proxy[0].context
authAppUrl should point to authorization app deployment that you would like to redirect user to after logout
redirectUrl is optional - you need it if on chosen auth app deploy redirectUrl for your app is different then localhost
passCodeThroughLocalhost - set it to true if you are working locally, but you want to authorize through remote auth-app
appName: 'ShelfSpendDev', - I don't know who added this but i guess it should match app name in your auth-app instance of choice
matomoSiteId: '', - I don't know who added this and noone wrote anything about it anywhere
*/

/*
use something like this for local development with local wss BE and local authorization BE

import proxy from 'root/proxy.config.js';

export const environment = {
  production: false,
  apiUrl: proxy[0].context,
  baseUrl: '',
  authAppUrl: 'http://localhost:3000',
  version: '',
  appName: 'ShelfSpendDev',
  matomoSiteId: '',
};
*/

/*
use this for local development with local wss BE and authorization on admin-dev.toolswm.com

import proxy from 'root/proxy.config.js';

export const environment = {
  production: false,
  apiUrl: proxy[0].context,
  baseUrl: '',
  authAppUrl: 'https://localhost:8080/auth-proxy',
  redirectUrl: 'https://localhost:8080',
  passCodeThroughLocalhost: true,
  version: '',
  appName: 'ShelfSpendDev',
  matomoSiteId: '',
};

*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
