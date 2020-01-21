import * as _ from 'lodash';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUrl: string;

  constructor (@Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    const redirectUrl = _.get(environment, 'redirectUrl', '');
    const passCodeThroughLocalhost = _.get(environment, 'passCodeThroughLocalhost');
    if (passCodeThroughLocalhost && !redirectUrl) {
      console.error('You have passCodeThroughLocalhost set to true in your environment, but no redirectUrl. Set both or none.');
      alert('error in envs - check console');
      return;
    }

    const redirectToAppSuffix =
      redirectUrl
        ? `/login?redirectUrl=${redirectUrl}`
        : `/login/${environment.appName}?`; // ? because in wss we have our own login page and we always add instantRedirect (below)
    const passCodeThroughLocalhostSuffix =
      passCodeThroughLocalhost
        ? '&passCodeThroughLocalhost=true&' // & because it always comes with redirectUrl, & in the end for adding instantRedirect below
        : '';

    this.loginUrl = `${environment.authAppUrl}${redirectToAppSuffix}${passCodeThroughLocalhostSuffix}instantRedirect=true`;
    /*
      when app is not properly registered in database and authorization-app instance allows custom redirects,
      go to your environment.ts and set up redirectUrl
      if you want to work with local app and authorize in remote auth,
      go to your environment.ts and set up passCodeThroughLocalhost and add proxy for authroization in proxy.conf
    */
  }

  login(): void {
    this.document.location.href = this.loginUrl;
  }

}
