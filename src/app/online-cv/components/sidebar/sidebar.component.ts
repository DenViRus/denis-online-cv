import { Component } from '@angular/core';

import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ProfileComponent,
    ContactComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
