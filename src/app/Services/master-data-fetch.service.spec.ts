import { TestBed } from '@angular/core/testing';

import { MasterDataFetchService } from './master-data-fetch.service';

describe('MasterDataFetchService', () => {
  let service: MasterDataFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterDataFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
