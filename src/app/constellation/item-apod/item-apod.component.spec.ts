import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemApodComponent } from './item-apod.component';

describe('ItemApodComponent', () => {
  let component: ItemApodComponent;
  let fixture: ComponentFixture<ItemApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemApodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
