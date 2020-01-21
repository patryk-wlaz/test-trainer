import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from 'app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const win = window as any;

function setUpTracking(): void {
  win._paq = win._paq || [];
  const { matomoSiteId } = environment;

  if (!matomoSiteId) {
    console.error('No tracking enabled - matomo site ID is missing');

    return null;
  }

  win._paq.push(['trackPageView']);
  win._paq.push(['enableLinkTracking']);
  (function(): void {
    const u = '//stats.wmplanningtools.com/';

    win._paq.push(['setTrackerUrl', u + 'matomo.php']);
    win._paq.push(['setSiteId', matomoSiteId]);

    const d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'matomo.js';
    s.parentNode.insertBefore(g, s);
  })();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(setUpTracking)
  .catch(err => console.error(err));
