import { Component } from '@angular/core';

import { ExperienceComponent } from './components/experience/experience.component';
import { SummaryComponent } from './components/summary/summary.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SummaryComponent,
    ExperienceComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
