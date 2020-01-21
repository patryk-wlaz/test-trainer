import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';
import { PersonalRoutingModule } from './personal-routing.module';

import { PersonalMainComponent } from './personal-main/personal-main.component';
import { PersonalLayoutComponent } from './personal-layout/personal-layout.component';
import { SingleTileComponent } from './single-tile/single-tile.component';
import { WorkspaceWidgetComponent } from './workspace-widget/workspace-widget.component';

@NgModule({
  declarations: [
    PersonalMainComponent,
    PersonalLayoutComponent,
    SingleTileComponent,
    WorkspaceWidgetComponent,
  ],
  imports: [CommonModule, PersonalRoutingModule, SharedModule],
})
export class PersonalModule { }
