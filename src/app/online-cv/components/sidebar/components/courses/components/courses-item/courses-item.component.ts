import { Component, Input } from '@angular/core';

import { ICoursesItem } from '../../models/courses-item.model';

@Component({
  selector: 'app-courses-item',
  standalone: true,
  imports: [],
  templateUrl: './courses-item.component.html',
  styleUrl: './courses-item.component.scss',
})
export class CoursesItemComponent {
  @Input() public itemData!: ICoursesItem;
}
