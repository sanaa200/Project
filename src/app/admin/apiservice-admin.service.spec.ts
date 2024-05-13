import { TestBed } from '@angular/core/testing';

import { ApiserviceAdminService } from './apiservice-admin.service';

describe('ApiserviceAdminService', () => {
  let service: ApiserviceAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiserviceAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
