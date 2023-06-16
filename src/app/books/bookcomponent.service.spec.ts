import { TestBed } from '@angular/core/testing';

import { BookcomponentService } from './bookcomponent.service';

describe('BookcomponentService', () => {
  let service: BookcomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookcomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
