import { TestBed } from '@angular/core/testing';

import { MercantilAndinaService } from './mercantil-andina.service';

describe('MercantilAndinaService', () => {
  let service: MercantilAndinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercantilAndinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
