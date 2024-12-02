import { TestBed } from '@angular/core/testing';

import { FavoritarService } from './favoritar.service';

describe('FavoritarService', () => {
  let service: FavoritarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
