import { TestBed } from '@angular/core/testing';

import { MuebleServiceLocalService } from './mueble-service-local.service';

describe('MuebleServiceLocalService', () => {
  let service: MuebleServiceLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuebleServiceLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
