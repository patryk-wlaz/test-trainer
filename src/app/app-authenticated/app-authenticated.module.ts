import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatIconModule } from '@angular/material';
import { Ng5SliderModule } from 'ng5-slider';
import { CommonModule } from '@angular/common';

// Components
import { CampaignsListComponent } from 'app/campaigns-list/campaigns-list.component';
import { CampaignWrapperGuard } from 'app/campaign-wrapper/campaign-wrapper.guard';
import { AuthGuard } from 'app/shared/guards/auth.guard';
import { MainHeaderComponent } from 'app/main-header/main-header.component';
import { MainFooterComponent } from 'app/main-footer/main-footer.component';
import { ContactsListDialogComponent } from 'app/contacts-list-dialog/contacts-list-dialog';
import { CoreModule } from 'app/core/core.module';
import { SharedModule } from 'app/shared/shared.module';

import { AuthenticatedAppComponent } from './app-authenticated.component';
import { AuthenticatedAppRoutingModule } from './app-authenticated-routing.module';
import { VersionsInfoModalComponent } from '../versions-info-modal/versions-info-modal';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    InfiniteScrollModule,
    MatIconModule,
    Ng5SliderModule,
    AuthenticatedAppRoutingModule,
  ],
  providers: [CampaignWrapperGuard, AuthGuard],
  declarations: [
    AuthenticatedAppComponent,
    MainHeaderComponent,
    CampaignsListComponent,
    MainFooterComponent,
    ContactsListDialogComponent,
    VersionsInfoModalComponent,
  ],
  entryComponents: [
    ContactsListDialogComponent,
    VersionsInfoModalComponent,
  ],
})
export class AuthenticatedAppModule { }
