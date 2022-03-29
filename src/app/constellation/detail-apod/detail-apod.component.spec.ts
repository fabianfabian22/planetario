import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailApodComponent } from './detail-apod.component';

describe('DetailApodComponent', () => {
  let component: DetailApodComponent;
  let fixture: ComponentFixture<DetailApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailApodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
