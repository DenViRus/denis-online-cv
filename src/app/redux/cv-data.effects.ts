import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { OnlineCvService } from '../online-cv/services/online-cv.service';
import { OnlineCvActions } from './cv-data.actions';

@Injectable()
export class CvDataEffects {
  constructor(
    private actions$: Actions,
    private onlineCvService: OnlineCvService
  ) {}

  loadOnlineCvData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OnlineCvActions.loadLangTogglerData),
      switchMap((action) => {
        const url =
          action.langTogglerData === 'ru'
            ? 'assets/json/online-cv-data-ru.json'
            : 'assets/json/online-cv-data-en.json';
        return this.onlineCvService.getProductsData(url).pipe(
          map((onlineCvData) => {
            return OnlineCvActions.loadOnlineCvData({
              onlineCvData: onlineCvData,
            });
          })
        );
      })
    );
  });
}
