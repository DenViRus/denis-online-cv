import { Component, Input } from '@angular/core';

import { ILanguagesItem } from '../../models/languages-item.model';

@Component({
  selector: 'app-languages-item',
  standalone: true,
  imports: [],
  templateUrl: './languages-item.component.html',
  styleUrl: './languages-item.component.scss'
})
export class LanguagesItemComponent {
  @Input() public itemData!: ILanguagesItem;

}
