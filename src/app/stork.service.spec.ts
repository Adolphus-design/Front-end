import { TestBed } from '@angular/core/testing';

import { StorkService } from './stork.service';

describe('StorkService', () => {
  let service: StorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
