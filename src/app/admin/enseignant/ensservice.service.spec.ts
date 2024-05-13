import { TestBed } from '@angular/core/testing';

import { EnsserviceService } from './ensservice.service';

describe('EnsserviceService', () => {
  let service: EnsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
