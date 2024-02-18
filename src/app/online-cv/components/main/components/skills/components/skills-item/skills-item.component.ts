import { Component, Input  } from '@angular/core';

import { ISkillsItem } from '../../models/skills-item.model';

@Component({
  selector: 'app-skills-item',
  standalone: true,
  imports: [],
  templateUrl: './skills-item.component.html',
  styleUrl: './skills-item.component.scss',
})
export class SkillsItemComponent {
  @Input() public itemData!: ISkillsItem;
}
