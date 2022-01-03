import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FilterService} from 'src/app/services/filter.service';
@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['../styles/company-filter.component.scss']
})
export class CompanyFilterComponent {

  public types!: string[];
  public industries!: string[];

  @Output() filterNotification = new EventEmitter();

  filter = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
    industry: new FormControl()
  });
  constructor(
    private filterService: FilterService
  ) { 
    filterService.getTypes().subscribe(items => this.types = items);
    filterService.getIndustries().subscribe(items => this.industries = items);
  }

  notify(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    switch(element.id) {
      case 'name': {
        return this.filterNotification.emit({companyName: value, type: this.filter.get('type')?.value?? 'all', industry: this.filter.get('industry')?.value?? 'all'});
      }
      case 'type': {
        return this.filterNotification.emit({companyName: this.filter.get('name')?.value?? '', type: value, industry: this.filter.get('industry')?.value?? 'all'});
      }
      case 'industry': {
        return this.filterNotification.emit({companyName: this.filter.get('name')?.value?? '', type: this.filter.get('type')?.value?? 'all', industry: value});
      }
    }
    
  }
}
