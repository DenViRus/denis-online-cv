import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectCoursesData } from '../../../../../redux/cv-data.selectors';
import { LearningItemComponent } from './components/learning-item/learning-item.component';
import { ILearning } from './models/learning.model';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [LearningItemComponent],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss',
})
export class LearningComponent implements OnInit, OnDestroy {
  public learningData!: ILearning;
  private learningDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.learningDataSubscription = this.store
      .select(selectCoursesData)
      .pipe(tap((learningData) => (this.learningData = learningData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.learningDataSubscription.unsubscribe();
  }
}
