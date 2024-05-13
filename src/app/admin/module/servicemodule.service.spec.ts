import { TestBed } from '@angular/core/testing';

import { ServicemoduleService } from './servicemodule.service';

describe('ServicemoduleService', () => {
  let service: ServicemoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicemoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
