import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { OnlineCvService } from '../online-cv/services/online-cv.service';
import { OnlineCvActions } from './cv-data.actions';


@Injectable()
export class CvDataEffects {
  constructor(private actions$: Actions, private onlineCvService: OnlineCvService) {}

  loadOnlineCvData$ = createEffect(() =>
  { return this.actions$.pipe(
    ofType(OnlineCvActions.loadOnlineCvState),
    switchMap((action) => {
      return this.onlineCvService.getProductsData(action.url).pipe(
        map((onlineCvData) => {
          return OnlineCvActions.loadOnlineCvState({ onlineCvState: onlineCvData });
        })
      );
    })
  ); }
  );
}
