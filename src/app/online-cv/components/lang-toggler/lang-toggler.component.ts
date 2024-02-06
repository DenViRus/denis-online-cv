import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { OnlineCvActions } from '../../../redux/cv-data.actions';
import { selectLangTogglerData } from '../../../redux/cv-data.selectors';
import { LangToggler } from './models/lang-toggler.model';

@Component({
  selector: 'app-lang-toggler',
  standalone: true,
  imports: [],
  templateUrl: './lang-toggler.component.html',
  styleUrl: './lang-toggler.component.scss'
})
export class LangTogglerComponent implements OnInit, OnDestroy {
  public langTogglerData!: LangToggler;
  private langTogglerDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.langTogglerDataSubscription = this.store
      .select(selectLangTogglerData)
      .pipe(tap((langTogglerData) => (this.langTogglerData = langTogglerData)))
      .subscribe();
    this.store.dispatch(OnlineCvActions.loadLangTogglerData({ langTogglerData: this.langTogglerData }));
  }

  onToggleLang() {
    this.langTogglerData = this.langTogglerData === LangToggler.EN ? LangToggler.RU : LangToggler.EN;
    this.store.dispatch(OnlineCvActions.loadLangTogglerData({ langTogglerData: this.langTogglerData }));

  }

  ngOnDestroy() {
    this.langTogglerDataSubscription.unsubscribe();
  }

}
