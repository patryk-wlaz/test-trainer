import { DomSanitizer } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

import * as _ from 'lodash';

@Injectable()
export class MatIconService {
  public icons = {
    wm_maximize: {
      name: 'wm-maximize',
      path: '/assets/icons/maximize.svg',
    },
    wm_minimize: {
      name: 'wm-minimize',
      path: '/assets/icons/minimize.svg',
    },
    wm_notification: {
      name: 'wm-notification',
      path: '/assets/icons/notification.svg',
    },
    wm_play: {
      name: 'wm-play',
      path: '/assets/icons/play.svg',
    },
    wm_list: {
      name: 'wm-list',
      path: '/assets/icons/list.svg',
    },
    wm_tiles: {
      name: 'wm-tiles',
      path: '/assets/icons/tiles.svg',
    },
  };

  constructor(
    @Inject(MatIconRegistry) iconRegistry: MatIconRegistry,
    @Inject(DomSanitizer) sanitizer: DomSanitizer
  ) {
    _.mapValues(this.icons, (icon) =>
      iconRegistry.addSvgIcon(icon.name, sanitizer.bypassSecurityTrustResourceUrl(icon.path))
    );
  }
}
