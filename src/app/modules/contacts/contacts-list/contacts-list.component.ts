import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { defaults } from '@config/defaults';
import { PersonalFacade } from 'app/state/personal';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  @Input() isList: boolean;

  personalContacts$ = this.personalFacade.personalContacts$;
  public filter = defaults.contactsParams.filter;
  public order = defaults.contactsParams.order;

  constructor(private route: ActivatedRoute, private personalFacade: PersonalFacade) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      // TODO: WMS-862 There is no backend for contacts and this is just temp mockup solution
      this.filter = params.filter || this.filter;
      this.order = params.order || this.order;
      this.personalFacade.getPersonalContacts();
      return;
    });
  }
}
