import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})
export class CompanySortComponent implements OnInit {

  @Output() sort = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
