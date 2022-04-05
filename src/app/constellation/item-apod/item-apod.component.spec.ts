import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemApodComponent } from './item-apod.component';

describe('ItemApodComponent', () => {
  let component: ItemApodComponent;
  let fixture: ComponentFixture<ItemApodComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemApodComponent],
      imports: [
        RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(ItemApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.info = [ ];
    expect(component).toBeTruthy();
  });


});
