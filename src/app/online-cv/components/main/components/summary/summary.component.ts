import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectSummaryData } from '../../../../../redux/cv-data.selectors';
import { SummaryItemComponent } from './components/summary-item/summary-item.component';
import { ISummary } from './models/summary.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [SummaryItemComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit, OnDestroy{
  public summaryData!: ISummary;
  private summaryDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.summaryDataSubscription = this.store
      .select(selectSummaryData)
      .pipe(tap((summaryData) => (this.summaryData = summaryData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.summaryDataSubscription.unsubscribe();
  }

}
