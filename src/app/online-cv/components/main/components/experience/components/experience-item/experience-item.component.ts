import { Component, Input } from '@angular/core';

import { IExperienceItem } from '../../models/experience-item.model';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent {
  @Input() public itemData!: IExperienceItem;
}
