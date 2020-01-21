import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SharedModule } from 'app/shared/shared.module';
import { CoreModule } from 'app/core/core.module';

import { UnauthenticatedAppRoutingModule } from './app-unauthenticated-routing.module';
import { UnauthenticatedAppComponent } from './app-unauthenticated.component';

import { LoginComponent } from 'src/app/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    InfiniteScrollModule,
    MatIconModule,
    UnauthenticatedAppRoutingModule,
  ],
  declarations: [UnauthenticatedAppComponent, LoginComponent],
})
export class UnauthenticatedAppModule { }
