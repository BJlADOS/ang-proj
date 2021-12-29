import { TestBed } from '@angular/core/testing';

import { EndpointRequestService } from './endpoint-request.service';

describe('EndpointRequestService', () => {
  let service: EndpointRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
