import { TestBed } from '@angular/core/testing';

import { CulturalPlaceService } from './cultural-place.service';

describe('CulturalPlaceService', () => {
  let service: CulturalPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CulturalPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
