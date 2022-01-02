import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, takeUntil, tap } from 'rxjs';
import { companyItem, sortByIndustry, sortByName, sortByType } from './company-item';


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
      return of(JSON.parse(localStorage.getItem('companies')));
    } else {
      return this.http.get<companyItem[]>('https://random-data-api.com/api/company/random_company?size=100').pipe(
        takeUntil(this._takeUntill$),
        tap(companies => 
          {
            this.sort(companies);
            localStorage.setItem('companies', JSON.stringify(companies));
          } ) 
      );
    }
  }

  public sort(companies: companyItem[]): void {
    const select = document.getElementById('select') as any;
    switch (select[select.selectedIndex].value) {
      case 'Name': {
        sortByName(companies);
      break;
      }
      case 'Type': {
        sortByType(companies);
        break;
      }
      case 'Industry': {
        sortByIndustry(companies);
        break;
      }
    }
  }
}
