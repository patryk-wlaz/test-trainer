import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersFacade } from 'app/state/users';
import { filter, take } from 'rxjs/operators';
import { RouterFacade } from 'app/state/router';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
import { BackgroundWave } from 'app/shared/scripts/background-wave';
import { config } from 'app/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('loginContainer', { static: false }) loginContainer: ElementRef<HTMLDivElement>;
  @ViewChild('loginForm', { static: false }) loginForm: ElementRef<HTMLElement>;
  @ViewChild('wmLogo', { static: false }) wmLogo: ElementRef<HTMLImageElement>;
  @ViewChild('waveAnimation', { static: true }) waveAnimation: ElementRef<HTMLVideoElement>;

  loading$: Observable<boolean>;
  myself$: Observable<User>;

  constructor(
    private usersFacade: UsersFacade,
    private routerFacade: RouterFacade,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngAfterViewInit(): void {
    const loginContainer = this.loginContainer.nativeElement;
    const formElement = this.loginForm.nativeElement;
    const wmLogo = this.wmLogo.nativeElement;
    this.waveAnimation.nativeElement.oncanplaythrough = () => {
      this.waveAnimation.nativeElement.muted = true;
      this.waveAnimation.nativeElement.play();
    };
    setTimeout(() => loginContainer.classList.add('on'), 1);
    setTimeout(() => wmLogo.classList.add('on'), 2100);
    setTimeout(() => formElement.classList.add('on'), 2000);
  }

  ngOnInit() {
    this.loading$ = this.usersFacade.loading$;
    this.myself$ = this.usersFacade.myself$;

    this.myself$
      .pipe(
        filter((myself) => !!myself),
        take(1)
      )
      .subscribe(() =>
        this.routerFacade.changeRoute({
          linkParams: ['/'],
        })
      );
  }

  login() {
    if (!environment.production) {
      // on localhost we just load HTUser mock into state to log in
      return this.usersFacade.getMyself();
    }
    const url = `${environment.authAppUrl}/login/${environment.appName}?instantRedirect=true`;
    this.document.location.href = url;
  }
}
