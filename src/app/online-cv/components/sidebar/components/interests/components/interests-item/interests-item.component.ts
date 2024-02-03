import { Component, Input } from '@angular/core';

import { IInterestsItem } from '../../models/interests-item.model';

@Component({
  selector: 'app-interests-item',
  standalone: true,
  imports: [],
  templateUrl: './interests-item.component.html',
  styleUrl: './interests-item.component.scss',
})
export class InterestsItemComponent {
  @Input() public itemData!: IInterestsItem;
}
