import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import {
  selectContactsData,
  selectCoursesData,
  selectProfileData,
  selectProjectsData,
  selectSkillsData,
  selectSummaryData,
} from '../../../redux/cv-data.selectors';
import { IProjects } from '../main/components/projects/models/projects.model';
import { ISkills } from '../main/components/skills/models/skills.model';
import { ISkillsItem } from '../main/components/skills/models/skills-item.model';
import { ISummary } from '../main/components/summary/models/summary.model';
import { IContacts } from '../sidebar/components/contacts/models/contacts.model';
import { ICourses } from '../sidebar/components/courses/models/courses.model';
import { IProfile } from '../sidebar/components/profile/models/profile.model';
import { IActivationKeys } from './models/activate-keys.model';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss',
})
export class MobileComponent implements OnInit, OnDestroy {
  public profileData!: IProfile;
  public contactsData!: IContacts;
  public summaryData!: ISummary;
  public projectsData!: IProjects;
  public coursesData!: ICourses;
  public skillsData!: ISkills;

  public layoutData!: ISkillsItem;
  public javaScriptData!: ISkillsItem;
  public typeScriptData!: ISkillsItem;
  public angularData!: ISkillsItem;

  public ActivationKeys = IActivationKeys;

  public activationBlock: Record<IActivationKeys, boolean> = {
    [IActivationKeys.SUMMARY]: false,
    [IActivationKeys.PROJECTS]: false,
    [IActivationKeys.COURSES]: false,
    [IActivationKeys.SKILLS]: false,
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
    const coursesDataSubscription = this.store
      .select(selectCoursesData)
      .pipe(tap((coursesData) => (this.coursesData = coursesData)))
      .subscribe();
    this.subscription.add(coursesDataSubscription);
    const skillsDataSubscription = this.store
      .select(selectSkillsData)
      .pipe(
        tap((skillsData) => {
          this.skillsData = skillsData;

          if (this.skillsData && this.skillsData.items) {
            this.layoutData = this.skillsData.items.find(
              (item) => item.type === 'layout'
            )!;
            this.javaScriptData = skillsData.items.find(
              (item) => item.type === 'javascript'
            )!;
            this.typeScriptData = skillsData.items.find(
              (item) => item.type === 'typescript'
            )!;
            this.angularData = skillsData.items.find(
              (item) => item.type === 'angular'
            )!;
          }
        })
      )
      .subscribe();
    this.subscription.add(skillsDataSubscription);
  }

  onActivate(type: IActivationKeys) {
    Object.keys(this.activationBlock).forEach((key) => {
      if (key !== type) this.activationBlock[key as IActivationKeys] = false;
    });
    this.activationBlock[type] = !this.activationBlock[type];
  }

  // @HostBinding

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
