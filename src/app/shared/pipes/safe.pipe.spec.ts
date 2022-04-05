import { SecurityContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl, BrowserModule} from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';
import {
  MockBuilder,
  MockProvider,
  MockRender,
  ngMocks,
} from 'ng-mocks';


describe('SafePipe', () => {
  let sanitizer: DomSanitizer;
  let pipe: SafePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
    providers: [
      MockProvider(DomSanitizer, {
        sanitize: (context: SecurityContext, value: string) =>
          `sanitized:${context}:${value.length}`
      }),
    ]
    }).compileComponents();
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafePipe(sanitizer);

    });

  it('create an instance', () => {
  expect(pipe).toBeTruthy();
  });


  });
