import { Component, Input } from '@angular/core';

import { IProjectsItem } from '../../models/projects-item.model';

@Component({
  selector: 'app-projects-item',
  standalone: true,
  imports: [],
  templateUrl: './projects-item.component.html',
  styleUrl: './projects-item.component.scss',
})
export class ProjectsItemComponent {
  @Input() public itemData!: IProjectsItem;
}
