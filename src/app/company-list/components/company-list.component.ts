import { Component } from '@angular/core';
import { companyItem, sortByIndustry, sortByName, sortByType } from '../../company-item';
import { EndpointRequestService } from '../../services/endpoint-request.service';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['../styles/company-list.component.scss']
})
export class CompanyListComponent {

  public companies!: companyItem[];
  public allCompanies!: companyItem[];
  constructor(
        private endPointRequestService: EndpointRequestService
  ) {
    this.endPointRequestService.getCompanies().subscribe((item: companyItem[]): companyItem[] => {
      this.allCompanies = item;
      this.filter({companyName: '', type: 'all', industry: 'all'});
      this.sort('Name');
      return this.companies;
    }); 
  }

  sort(value: string) {
    switch (value) {
      case 'Name': {
        this.companies = sortByName(this.companies);
        this.allCompanies = sortByName(this.allCompanies);
        break;
      }
      case 'Type': {
        this.companies = sortByType(this.companies);
        this.allCompanies = sortByType(this.allCompanies);
        break;
      }
      case 'Industry': {
        this.companies = sortByIndustry(this.companies);
        this.allCompanies = sortByType(this.allCompanies);
        break;
      }
    }
  }

  filter(filter: {companyName: string, type: string, industry: string}) {
    const namePredicate = new RegExp(filter.companyName, 'i');
    this.companies = this.allCompanies.filter(company => namePredicate.test(company.business_name));
    this.companies = this.companies.filter(company => filter.type === 'all'? true: company.type === filter.type);
    this.companies = this.companies.filter(company => filter.industry === 'all'? true: company.industry === filter.industry);
  }
}
