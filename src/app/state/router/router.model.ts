import { NavigationExtras, Params } from '@angular/router';

export interface ChangeRoutePayload {
  linkParams: any[];
  extras?: NavigationExtras;
}

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}
