import { Component, OnInit } from '@angular/core';
import { navigation } from '@config/navigation';
import { defaults } from '@config/defaults';

@Component({
  selector: 'app-contacts-main',
  templateUrl: './contacts-main.component.html',
  styleUrls: ['./contacts-main.component.scss'],
})
export class ContactsMainComponent {
  public contactsNav = navigation.contacts;
  public isList = defaults.contactsParams.isList;

  public changeContactsContainerType(containerType: boolean): void {
    this.isList = containerType;
  }
}
