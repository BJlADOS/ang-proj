import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { companyItem } from '../company-item';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  company!: companyItem;
  constructor(
    private route: ActivatedRoute
  ) { 

  }

  private getCompany(uid: string) {
    const companies = JSON.parse(localStorage.getItem('companies')) as companyItem[];
    for (const company of companies) {
      if (company.uid === uid) {
        return company;
      }
    }
    return undefined;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('id');

    this.company = this.getCompany(productIdFromRoute);
  }

}
