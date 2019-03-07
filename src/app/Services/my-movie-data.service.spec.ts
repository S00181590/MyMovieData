import { TestBed } from '@angular/core/testing';

import { MyMovieDataService } from './my-movie-data.service';

describe('MyMovieDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyMovieDataService = TestBed.get(MyMovieDataService);
    expect(service).toBeTruthy();
  });
});
