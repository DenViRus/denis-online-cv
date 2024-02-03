import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectCoursesData } from '../../../../../redux/cv-data.selectors';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { ICourses } from './models/courses.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CoursesItemComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit, OnDestroy {
  public coursesData!: ICourses;
  private coursesDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.coursesDataSubscription = this.store
      .select(selectCoursesData)
      .pipe(tap((coursesData) => (this.coursesData = coursesData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.coursesDataSubscription.unsubscribe();
  }
}
