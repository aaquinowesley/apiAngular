import { TestBed } from '@angular/core/testing';

import { ConsumindoApiService } from './consumindo-api.service';

describe('ConsumindoApiService', () => {
  let service: ConsumindoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumindoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
