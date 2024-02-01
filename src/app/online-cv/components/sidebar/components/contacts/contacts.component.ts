import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectContactsData } from '../../../../../redux/cv-data.selectors';
import { ContactsItemComponent } from './components/contacts-item/contacts-item.component';
import { IContacts } from './models/contacts.model';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactsItemComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit, OnDestroy{
  public contactsData!: IContacts;
  private contactsDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.contactsDataSubscription = this.store
      .select(selectContactsData)
      .pipe(tap((contactsData) => (this.contactsData = contactsData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.contactsDataSubscription.unsubscribe();
  }

}
