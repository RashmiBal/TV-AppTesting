import { TestBed } from '@angular/core/testing';

import { TvshowService } from './tvshow.service';
import { HttpClientModule } from '@angular/common/http';

describe('TvshowService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [
    HttpClientModule],}));

  it('should be created', () => {
    const service: TvshowService = TestBed.get(TvshowService);
    expect(service).toBeTruthy();
  });
});
