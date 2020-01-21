import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { config } from '@config/index';

import { Client, ClientsFacade, Brand, Market } from 'app/state/clients';
import { RouterFacade } from 'app/state/router';
import { NewsSidebarFacade } from 'app/state/news-sidebar';
import { User, UsersFacade } from 'app/state/users';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() public isExample = true;
  @Input() public isHeaderContentExpanded = false;
  @Input() public isBrandChoosen = false;
  @ViewChild('waveAnimation', { static: false }) waveAnimation: ElementRef<HTMLVideoElement>;

  public isChangelogVisible = false;
  public isDashboard = true;
  public haveAdminPermissions = false;
  public currentSubNavExpanded: any;
  public dashboardNav = config.navigation.dashboard;
  public mainNav = config.navigation.main;
  public defaultAvatar = config.defaults.avatar;
  public userAvatar: string;
  public client$: Observable<Client>;
  private myself$: Observable<User>;
  public logoutRedirectTo = `${environment.authAppUrl}/logout`;
  public currentRoute: string;
  public country: Market;
  public brand: Brand;
  public isDescriptionExpanded = false;
  private unsubscribe: Subject<void> = new Subject();
  private clientId: string;
  private brandId: string;

  constructor(
    private renderer: Renderer2,
    private newsSidebarFacade: NewsSidebarFacade,
    private usersFacade: UsersFacade,
    private clientsFacade: ClientsFacade,
    private routerFacade: RouterFacade,
    private translate: TranslateService,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.myself$ = this.usersFacade.myself$;
    this.myself$
      .pipe(
        filter((myself) => !!myself),
        takeUntil(this.unsubscribe)
      )
      .subscribe((myself) => {
        this.haveAdminPermissions = myself.userRoles.some(
          (role) => role.name === config.constants.USER_ROLES.MARKET_ADMIN
        );
        this.userAvatar = myself.avatar;
      });

    this.watchCurrentRoute();
    if (this.isExample) {


      this.client$ = this.clientsFacade.selectedClient$;
      if (!this.isBrandChoosen) {
        this.clientId = this.activatedRoute.snapshot.params.clientId;
        if (this.clientId) {
          this.clientsFacade.getClient(this.clientId);
        }
        return;
      }

      if (!this.activatedRoute.snapshot.params.brandId) {
        this.brandId = this.activatedRoute.snapshot.url[0].path;
      } else {
        this.brandId = this.activatedRoute.snapshot.params.brandId;
      }

      if (this.brandId) {

        this.clientsFacade.selectedBrand$.pipe(
          filter((brand) => !!brand)
        ).subscribe(brand => {
          this.clientId = brand.clientId;
          this.brand = brand;
          this.country = brand.country;
          this.clientsFacade.getClient(this.clientId);
        });
        this.clientsFacade.getBrand(this.brandId);
        return;
      }
    }
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.clientsFacade.resetClient();
  }

  public toggleHeaderContent(): void {
    const waveElement = this.waveAnimation.nativeElement;

    this.isHeaderContentExpanded = !this.isHeaderContentExpanded;

    if (!this.isHeaderContentExpanded) {
      waveElement.classList.remove('on');
    }
    if (waveElement && this.isHeaderContentExpanded) {
      setTimeout(() => waveElement.classList.add('on'), 300);
    }
  }

  handleSectionClick(event: any, section: any) {
    if (section.link) {
      this.router.navigate([`${section.link}/${this.brandId}`]);
    } else {
      this.toggleClass(event);
    }
  }

  public toggleClass(event: any): void {
    const parentTarget = event.target.parentElement;

    const hasClass = parentTarget.classList.contains('clicked');
    if (hasClass) {
      this.renderer.removeClass(this.currentSubNavExpanded, 'clicked');
      this.currentSubNavExpanded = null;
      return;
    }
    if (this.currentSubNavExpanded) {
      this.renderer.removeClass(this.currentSubNavExpanded, 'clicked');
    }
    this.renderer.addClass(parentTarget, 'clicked');
    this.currentSubNavExpanded = parentTarget;
    return;
  }

  private watchCurrentRoute(): void {
    this.router.events.subscribe(() => {
      if (this.location.path() !== '') {
        this.currentRoute = this.location.path();
        return;
      }
      this.currentRoute = '/';
      return;
    });
  }

  public getClientPath(): string {
    return `/clients/${this.clientId}/markets`;
  }

  public toggleClientDescription(): void {
    this.isDescriptionExpanded = !this.isDescriptionExpanded;
  }

  public openNews(): void {
    this.newsSidebarFacade.openNewsSidebar();
  }

  public onLogoClick(): void {
    this.routerFacade.changeRoute({ linkParams: ['/'] });
  }

  public changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  public changeRoute(appLink: { title: string; path: string; subPath?: string }): void {
    const path = appLink.subPath
      ? `${appLink.path}/${this.brandId}/${appLink.subPath}`
      : `${appLink.path}/${this.brandId}`;

    this.router.navigate([path]);
  }
}
