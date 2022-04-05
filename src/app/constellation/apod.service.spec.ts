import { TestBed } from '@angular/core/testing';

import { ApodService } from './apod.service';
import {HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApodService', () => {
  let service: ApodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(ApodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
