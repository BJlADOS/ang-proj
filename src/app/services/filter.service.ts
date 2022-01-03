import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { EndpointRequestService } from './endpoint-request.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  getTypes() {
    return of(this.endpointRequestService.types);
  }
  private sort(array: Array<string>) {
    array.sort((el1, el2) => {
      if (el1 > el2) {
        return 1;
      }
      else if (el1 == el2) {
        return 0;
      }
      return -1;
    })
  }
  getIndustries() {
    return of(this.endpointRequestService.industries);
  }

  constructor(
    private endpointRequestService: EndpointRequestService
  ) { }
}
