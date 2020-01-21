import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Go } from '@state/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'app/state';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHeaderComponent implements OnInit {
  userInitials$: Observable<string>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.userInitials$ = this.store$.pipe(
      select(store => store.auth.user),
      filter(user => !!user),
      map(user => {
        if (user.firstname && user.lastname) { return `${user.firstname[0]}${user.lastname[0]}`; }
        if (user.lastname) { return user.lastname.substr(0, 2); }
        if (user.firstname) { return user.firstname.substr(0, 2); }
        return '??';
      })
    );
  }

  goToCampaigns(): void {
    this.store$.dispatch(new Go({ path: [`/campaigns`] }));
  }
}
