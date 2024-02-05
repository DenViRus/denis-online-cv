import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input  } from '@angular/core';

import { ISkillsItem } from '../../models/skills-item.model';

@Component({
  selector: 'app-skills-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-item.component.html',
  styleUrl: './skills-item.component.scss',
})
export class SkillsItemComponent {
  @Input() public itemData!: ISkillsItem;

  @HostBinding('style.--level-width') get levelWidth() {
    return `${this.itemData.level}%`;
  }

  @HostBinding('style.--level-width-5') get levelWidth5() {
    return `${this.itemData.level + 5}%`;
  }

  @HostBinding('style.--level-width-10') get levelWidth10() {
    return `${this.itemData.level + 10}%`;
  }

  @HostBinding('style.--level-width-15') get levelWidth15() {
    return `${this.itemData.level + 15}%`;
  }
}
