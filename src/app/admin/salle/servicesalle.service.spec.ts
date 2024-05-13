import { TestBed } from '@angular/core/testing';

import { ServicesalleService } from './servicesalle.service';

describe('ServicesalleService', () => {
  let service: ServicesalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
