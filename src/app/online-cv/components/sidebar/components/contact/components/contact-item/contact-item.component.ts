import { Component, Input } from '@angular/core';

import { IContactItem } from '../../models/contact-item.model';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss'
})
export class ContactItemComponent {
  @Input() public itemData!: IContactItem;

}
