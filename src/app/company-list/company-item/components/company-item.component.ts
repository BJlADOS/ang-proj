import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { companyItem } from '../../../company-item';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['../styles/company-item.component.scss']
})
export class CompanyItemComponent {
  @Input() company!: companyItem;
  constructor(
    private router: Router
  ) { }

  navigate(): void {
    this.router.navigate([`/detail/${this.company.uid}`])
  }

}
