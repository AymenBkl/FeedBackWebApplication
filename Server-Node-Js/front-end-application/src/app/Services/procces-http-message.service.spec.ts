import { TestBed } from '@angular/core/testing';

import { ProccesHttpMessageService } from './procces-http-message.service';

describe('ProccesHttpMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProccesHttpMessageService = TestBed.get(ProccesHttpMessageService);
    expect(service).toBeTruthy();
  });
});
