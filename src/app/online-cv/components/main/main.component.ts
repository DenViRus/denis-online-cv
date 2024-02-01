import { Component } from '@angular/core';

import { SummaryComponent } from './components/summary/summary.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SummaryComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
