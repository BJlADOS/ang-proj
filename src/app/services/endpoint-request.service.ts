import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, takeUntil, tap } from 'rxjs';
import { companyItem } from '../company-item';


@Injectable({
    providedIn: 'root'
})
export class EndpointRequestService {
  private _takeUntill$: Subject<void> = new Subject<void>();
  constructor(
    private http: HttpClient
  ) {  
  }

  public getCompanies(): Observable<companyItem[]> {
    if (localStorage.getItem('companies')) {
      return of(JSON.parse(localStorage.getItem('companies') as string));
    } else {
      return this.http.get<companyItem[]>('https://random-data-api.com/api/company/random_company?size=100').pipe(
        takeUntil(this._takeUntill$),
        tap(companies => 
          {
            localStorage.setItem('companies', JSON.stringify(companies));
          } ) 
      );
    }
  }

}
