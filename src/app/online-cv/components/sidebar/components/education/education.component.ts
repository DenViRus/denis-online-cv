import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectEducationData } from '../../../../../redux/cv-data.selectors';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { IEducation } from './models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [EducationItemComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent implements OnInit, OnDestroy {
  public educationData!: IEducation;
  private educationDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.educationDataSubscription = this.store
      .select(selectEducationData)
      .pipe(tap((educationData) => (this.educationData = educationData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.educationDataSubscription.unsubscribe();
  }
}
