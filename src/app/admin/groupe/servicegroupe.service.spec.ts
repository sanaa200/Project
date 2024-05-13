import { TestBed } from '@angular/core/testing';

import { ServicegroupeService } from './servicegroupe.service';

describe('ServicegroupeService', () => {
  let service: ServicegroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicegroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
