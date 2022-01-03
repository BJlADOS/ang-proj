import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['../styles/company-sort.component.scss']
})
export class CompanySortComponent {

  @Output() sort = new EventEmitter();
  constructor() { }

  changeValue(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    this.sort.emit(value);
  }
}
