import { TestBed } from '@angular/core/testing';

import { ServicefiliereService } from './servicefiliere.service';

describe('ServicefiliereService', () => {
  let service: ServicefiliereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicefiliereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
