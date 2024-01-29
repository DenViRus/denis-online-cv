import { Component } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-online-cv',
  standalone: true,
  imports: [MainComponent, SidebarComponent],
  templateUrl: './online-cv.component.html',
  styleUrl: './online-cv.component.scss'
})
export class OnlineCvComponent {

}
