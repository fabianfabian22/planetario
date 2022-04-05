import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DetailApodComponent } from './detail-apod.component';

describe('DetailApodComponent', () => {
  let component: DetailApodComponent;
  let fixture: ComponentFixture<DetailApodComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailApodComponent],
      imports: [RouterTestingModule],
      providers: [
        provideMockStore(),
      ]
    })
      .compileComponents();
      store = TestBed.inject(MockStore);
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
