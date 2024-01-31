import { Component } from '@angular/core';

import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EducationComponent } from './components/education/education.component';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ProfileComponent,
    ContactComponent,
    EducationComponent,
    CoursesComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
