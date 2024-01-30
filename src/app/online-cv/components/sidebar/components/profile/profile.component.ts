import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectProfileData } from '../../../../../redux/cv-data.selectors';
import { IProfile } from './models/profile.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit, OnDestroy {
  public profileData!: IProfile;
  private profileDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.profileDataSubscription = this.store
      .select(selectProfileData)
      .pipe(tap((profileData) => (this.profileData = profileData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.profileDataSubscription.unsubscribe();
  }
}
