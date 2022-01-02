import { Component, OnInit } from '@angular/core';
import { companyItem, sortByIndustry, sortByName, sortByType } from '../../company-item';
import { CompanySortComponent } from '../company-sort/components/company-sort.component';
import { EndpointRequestService } from '../../services/endpoint-request.service';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['../styles/company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public companies!: companyItem[];
  constructor(
        private endPointRequestService: EndpointRequestService
  ) {
    this.endPointRequestService.getCompanies().subscribe((item: companyItem[]): companyItem[] => {
      this.companies = item;
      this.sort('Name');
      return this.companies;
    }); 
  }

  ngOnInit(): void {
  }

  sort(value: string) {
    switch (value) {
      case 'Name': {
        sortByName(this.companies);
      break;
      }
      case 'Type': {
        sortByType(this.companies);
        break;
      }
      case 'Industry': {
        sortByIndustry(this.companies);
        break;
      }
    }
  }
}
