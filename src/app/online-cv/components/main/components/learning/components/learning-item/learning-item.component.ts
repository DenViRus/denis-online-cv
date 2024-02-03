import { Component, Input } from '@angular/core';

import { ILearningItem } from '../../models/learning-item.model';

@Component({
  selector: 'app-learning-item',
  standalone: true,
  imports: [],
  templateUrl: './learning-item.component.html',
  styleUrl: './learning-item.component.scss'
})
export class LearningItemComponent {
  @Input() public itemData!: ILearningItem;

}
