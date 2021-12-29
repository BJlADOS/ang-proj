import { Component, OnInit } from '@angular/core';
import { takeUntil, tap, Subject } from 'rxjs';
import { companyItem } from '../company-item';
import { EndpointRequestService } from '../endpoint-request.service';


@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public companies!: companyItem[];
  constructor(
        private endPointRequestService: EndpointRequestService
  ) {
    this.endPointRequestService.getCompanies().subscribe((item: companyItem[]): companyItem[] => this.companies = item);  
  }

  ngOnInit(): void {
  }

}
