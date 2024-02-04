import { Component } from '@angular/core';

import { ExperienceComponent } from './components/experience/experience.component';
import { LearningComponent } from './components/learning/learning.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SummaryComponent } from './components/summary/summary.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SummaryComponent,
    ExperienceComponent,
    LearningComponent,
    ProjectsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
