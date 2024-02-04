import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectSkillsData } from '../../../../../redux/cv-data.selectors';
import { SkillsItemComponent } from './components/skills-item/skills-item.component';
import { ISkills } from './models/skills.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillsItemComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit, OnDestroy {
  public skillsData!: ISkills;
  private skillsDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.skillsDataSubscription = this.store
      .select(selectSkillsData)
      .pipe(tap((skillsData) => (this.skillsData = skillsData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.skillsDataSubscription.unsubscribe();
  }
}
