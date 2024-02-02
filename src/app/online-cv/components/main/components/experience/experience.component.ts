import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectExperienceData } from '../../../../../redux/cv-data.selectors';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { IExperience } from './models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit, OnDestroy {
  public experienceData!: IExperience;
  private experienceDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.experienceDataSubscription = this.store
      .select(selectExperienceData)
      .pipe(tap((experienceData) => (this.experienceData = experienceData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.experienceDataSubscription.unsubscribe();
  }
}
