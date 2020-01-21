import { Component, Input } from '@angular/core';
import { PersonalContact } from 'app/state/personal';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss'],
})
export class SingleContactComponent {
  @Input() isList: boolean;
  @Input() personalContact: PersonalContact;
}
