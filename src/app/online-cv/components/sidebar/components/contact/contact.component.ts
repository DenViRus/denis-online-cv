import { Component } from '@angular/core';

import { ContactItemComponent } from './components/contact-item/contact-item.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactItemComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
