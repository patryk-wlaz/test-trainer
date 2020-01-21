import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-message-row',
  templateUrl: './table-message-row.component.html',
  styleUrls: ['./table-message-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableMessageRowComponent {
  constructor() {}

  @Input('message') message: string;
  @Input('clickable') clickable: boolean;
}
