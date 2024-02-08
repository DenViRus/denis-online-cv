import { Component } from '@angular/core';

import { LangTogglerComponent } from './components/lang-toggler/lang-toggler.component';
import { MainComponent } from './components/main/main.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-online-cv',
  standalone: true,
  imports: [
    MainComponent,
    SidebarComponent,
    MobileComponent,
    LangTogglerComponent
  ],
  templateUrl: './online-cv.component.html',
  styleUrl: './online-cv.component.scss'
})
export class OnlineCvComponent {

}
