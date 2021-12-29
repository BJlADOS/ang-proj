import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { companyItem } from '../company-item';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {
  @Input() company!: companyItem;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigate([`/detail/${this.company.uid}`])
  }

}
