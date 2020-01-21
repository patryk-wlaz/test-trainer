import * as _                 from 'lodash';
import { Injectable, Inject } from '@angular/core';
import { DomSanitizer }       from '@angular/platform-browser';
import { MatIconRegistry }    from '@angular/material';

@Injectable()
export class MatIconService {

  public icons = {
    campaign_name: {
      name: 'campaign_name',
      path: 'assets/icons/campaign-name-icon.svg',
    },
    client: {
      name: 'client',
      path: 'assets/icons/client-icon.svg',
    },
    market: {
      name: 'market',
      path: 'assets/icons/market-icon.svg',
    },
    start_date: {
      name: 'start_date',
      path: 'assets/icons/start-date-icon.svg',
    },
    end_date: {
      name: 'end_date',
      path: 'assets/icons/end-date-icon.svg',
    },
    description: {
      name: 'description',
      path: 'assets/icons/description-icon.svg',
    },
    duration: {
      name: 'duration',
      path: 'assets/icons/duration-icon.svg',
    },
    currency: {
      name: 'currency',
      path: 'assets/icons/currency-icon.svg',
    },
    back_arrow: {
      name: 'back_arrow',
      path: 'assets/icons/back-arrow-icon.svg',
    },
    tab_active: {
      name: 'tab_active',
      path: 'assets/icons/tab-active-icon.svg',
    },
    tab_lock: {
      name: 'tab_lock',
      path: 'assets/icons/tab-lock-icon.svg',
    },
    product: {
      name: 'product',
      path: 'assets/icons/icon-product.svg',
    },
    no_api: {
      name: 'no_api',
      path: 'assets/icons/no-api-icon.svg',
    },
    api_connected: {
      name: 'api_connected',
      path: 'assets/icons/api-connected.svg',
    },
    api_disconnected: {
      name: 'api_disconnected',
      path: 'assets/icons/api-disconnected.svg',
    },
    keyword: {
      name: 'keyword',
      path: 'assets/icons/keyword.svg',
    },
    warning: {
      name: 'warning',
      path: 'assets/icons/warning-icon.svg',
    },
    red_warning: {
      name: 'red_warning',
      path: 'assets/icons/red-warning-icon.svg',
    },
  };

  constructor(
    @Inject(MatIconRegistry) iconRegistry: MatIconRegistry,
    @Inject(DomSanitizer) sanitizer: DomSanitizer
  ) {
    _.mapValues(this.icons, icon =>
      iconRegistry.addSvgIcon(icon.name, sanitizer.bypassSecurityTrustResourceUrl(`../../../${icon.path}`)));
  }

}
