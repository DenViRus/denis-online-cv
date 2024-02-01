import { Component, Input } from '@angular/core';

import { ISummaryItem } from '../../models/summary-item.model';

@Component({
  selector: 'app-summary-item',
  standalone: true,
  imports: [],
  templateUrl: './summary-item.component.html',
  styleUrl: './summary-item.component.scss'
})
export class SummaryItemComponent {
  @Input() public itemData!: ISummaryItem;
}
