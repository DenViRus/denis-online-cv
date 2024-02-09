import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import {
  selectContactsData,
  selectProfileData,
  selectProjectsData,
  selectSummaryData} from '../../../redux/cv-data.selectors';
import { IProjects } from '../main/components/projects/models/projects.model';
import { ISummary } from '../main/components/summary/models/summary.model';
import { IContacts } from '../sidebar/components/contacts/models/contacts.model';
import { IProfile } from '../sidebar/components/profile/models/profile.model';
import { IActivationKeys } from './models/activate-keys.model';

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
  public projectsData!: IProjects;

  public ActivationKeys = IActivationKeys;

  public activationBlock: Record<IActivationKeys, boolean> = {
    [IActivationKeys.SUMMARY]: false,
    [IActivationKeys.PROJECTS]: false,
  };

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
    const projectsDataSubscription = this.store
      .select(selectProjectsData)
      .pipe(tap((projectsData) => (this.projectsData = projectsData)))
      .subscribe();
    this.subscription.add(projectsDataSubscription);
  }


  onActivate(type: IActivationKeys) {
    Object.keys(this.activationBlock).forEach((key) => {
      if (key !== type) this.activationBlock[key as IActivationKeys] = false;
    });
    this.activationBlock[type] = !this.activationBlock[type];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
