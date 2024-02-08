import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import {
  selectContactsData,
  selectProfileData,
  selectSummaryData
} from '../../../redux/cv-data.selectors';
import { ISummary } from '../main/components/summary/models/summary.model';
import { IContacts } from '../sidebar/components/contacts/models/contacts.model';
import { IProfile } from '../sidebar/components/profile/models/profile.model';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent implements OnInit, OnDestroy {
  public profileData!: IProfile;
  public contactsData!: IContacts;
  public summaryData!: ISummary;

  private subscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.subscription = new Subscription();
    const profileDataSubscription = this.store
      .select(selectProfileData)
      .pipe(tap((profileData) => (this.profileData = profileData)))
      .subscribe();
    this.subscription.add(profileDataSubscription);
    const contactsDataSubscription = this.store
      .select(selectContactsData)
      .pipe(tap((contactsData) => (this.contactsData = contactsData)))
      .subscribe();
    this.subscription.add(contactsDataSubscription);
    const summaryDataSubscription = this.store
      .select(selectSummaryData)
      .pipe(tap((summaryData) => (this.summaryData = summaryData)))
      .subscribe();
    this.subscription.add(summaryDataSubscription);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
