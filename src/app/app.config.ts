import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { OnlineCvReducer } from './redux/cv-data.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'onlineCvData', reducer: OnlineCvReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
