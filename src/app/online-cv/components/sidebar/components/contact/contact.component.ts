import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectContactData } from '../../../../../redux/cv-data.selectors';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { IContactItem } from './models/contact-item.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactItemComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy{
  public contactData!: IContactItem[];
  private contactDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.contactDataSubscription = this.store
      .select(selectContactData)
      .pipe(tap((contactData) => (this.contactData = contactData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.contactDataSubscription.unsubscribe();
  }

}
