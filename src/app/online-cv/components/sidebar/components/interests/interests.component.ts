import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectInterestsData } from '../../../../../redux/cv-data.selectors';
import { InterestsItemComponent } from './components/interests-item/interests-item.component';
import { IInterests } from './models/interests.model';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [InterestsItemComponent],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss',
})
export class InterestsComponent implements OnInit, OnDestroy {
  public interestsData!: IInterests;
  private interestsDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.interestsDataSubscription = this.store
      .select(selectInterestsData)
      .pipe(tap((interestsData) => (this.interestsData = interestsData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.interestsDataSubscription.unsubscribe();
  }
}
