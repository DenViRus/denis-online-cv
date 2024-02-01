import { Component } from '@angular/core';

import { ContactsComponent } from './components/contacts/contacts.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EducationComponent } from './components/education/education.component';
import { InterestsComponent } from './components/interests/interests.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ProfileComponent,
    ContactsComponent,
    EducationComponent,
    CoursesComponent,
    LanguagesComponent,
    InterestsComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
