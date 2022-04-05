import { TestBed } from '@angular/core/testing';

import { ApodService } from './apod.service';
import {HttpClientTestingModule } from '@angular/common/http/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('ApodService', () => {
  let service: ApodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: DomSanitizer,
        useValue: {
          sanitize: (ctx: any, val: string) => val,
          bypassSecurityTrustResourceUrl: (val: string) => val,
        }]

    });
    service = TestBed.inject(ApodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
