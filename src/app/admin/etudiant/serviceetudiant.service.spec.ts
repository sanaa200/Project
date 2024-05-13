import { TestBed } from '@angular/core/testing';

import { ServiceetudiantService } from './serviceetudiant.service';

describe('ServiceetudiantService', () => {
  let service: ServiceetudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceetudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
