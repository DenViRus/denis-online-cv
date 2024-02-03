import { Component, Input } from '@angular/core';

import { IContactsItem } from '../../models/contacts-item.model';

@Component({
  selector: 'app-contacts-item',
  standalone: true,
  imports: [],
  templateUrl: './contacts-item.component.html',
  styleUrl: './contacts-item.component.scss',
})
export class ContactsItemComponent {
  @Input() public itemData!: IContactsItem;
}
