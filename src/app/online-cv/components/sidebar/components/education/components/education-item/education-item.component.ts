import { Component, Input } from '@angular/core';

import { IEducationItem } from '../../models/education-item.model';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [],
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.scss'
})
export class EducationItemComponent {
  @Input() public itemData!: IEducationItem;
}
