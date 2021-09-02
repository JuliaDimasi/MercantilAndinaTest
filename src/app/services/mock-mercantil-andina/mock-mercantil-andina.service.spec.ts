import { TestBed } from '@angular/core/testing';

import { MockMercantilAndinaService } from './mock-mercantil-andina.service';

describe('MockMercantilAndinaService', () => {
  let service: MockMercantilAndinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockMercantilAndinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
