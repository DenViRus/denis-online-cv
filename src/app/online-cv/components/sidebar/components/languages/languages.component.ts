import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectLanguagesData } from '../../../../../redux/cv-data.selectors';
import { LanguagesItemComponent } from './components/languages-item/languages-item.component';
import { ILanguages } from './models/languages.model';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [LanguagesItemComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss',
})
export class LanguagesComponent implements OnInit, OnDestroy {
  public languagesData!: ILanguages;
  private languagesDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.languagesDataSubscription = this.store
      .select(selectLanguagesData)
      .pipe(tap((languagesData) => (this.languagesData = languagesData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.languagesDataSubscription.unsubscribe();
  }
}
