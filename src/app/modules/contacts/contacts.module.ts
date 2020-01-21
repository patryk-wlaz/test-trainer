import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SingleContactComponent } from './single-contact/single-contact.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { ContactsMainComponent } from './contacts-main/contacts-main.component';

@NgModule({
  declarations: [ContactsListComponent, SingleContactComponent, ContactsMainComponent],
  imports: [CommonModule, ContactsRoutingModule, SharedModule],
})
export class ContactsModule {}
