import { TestBed } from '@angular/core/testing';

import { ServiceseanceService } from './serviceseance.service';

describe('ServiceseanceService', () => {
  let service: ServiceseanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceseanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
