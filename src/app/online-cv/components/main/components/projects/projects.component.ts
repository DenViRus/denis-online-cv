import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectProjectsData } from '../../../../../redux/cv-data.selectors';
import { ProjectsItemComponent } from './components/projects-item/projects-item.component';
import { IProjects } from './models/projects.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public projectsData!: IProjects;
  private projectsDataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.projectsDataSubscription = this.store
      .select(selectProjectsData)
      .pipe(tap((projectsData) => (this.projectsData = projectsData)))
      .subscribe();
  }

  ngOnDestroy() {
    this.projectsDataSubscription.unsubscribe();
  }
}
