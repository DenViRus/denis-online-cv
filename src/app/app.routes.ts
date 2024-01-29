import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'online-cv', pathMatch: 'full' },
  {
    path: 'online-cv',
    loadComponent: () =>
      import('./online-cv/online-cv.component').then(
        (c) => c.OnlineCvComponent
      ),
  },
  { path: '**', redirectTo: 'online-cv' },
];
