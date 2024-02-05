import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IOnlineCv } from '../models/online-cv.model';

@Injectable({
  providedIn: 'root',
})
export class OnlineCvService {
  private onlineCVData$ = new Observable<IOnlineCv>();

  constructor(private httpClient: HttpClient) {}

  public getProductsData(url: string): Observable<IOnlineCv> {
    return (this.onlineCVData$ = this.httpClient.get<IOnlineCv>(url).pipe(
      map((onlineCVData) => {
        return onlineCVData;
      })
    ));
  }
}
