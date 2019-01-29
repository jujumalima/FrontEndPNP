import { TestBed } from '@angular/core/testing';

import { PicknpayService } from './picknpay.service';

describe('PicknpayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicknpayService = TestBed.get(PicknpayService);
    expect(service).toBeTruthy();
  });
});
