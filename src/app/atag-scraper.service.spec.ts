import { TestBed } from '@angular/core/testing';

import { ATagScraperService } from './atag-scraper.service';

describe('ATagScraperService', () => {
  let service: ATagScraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ATagScraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
