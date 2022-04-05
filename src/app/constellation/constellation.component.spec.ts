import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationComponent } from './constellation.component';
import { provideMockStore , MockStore} from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemApodComponent } from './item-apod/item-apod.component';
import { DetailApodComponent } from './detail-apod/detail-apod.component';
import { ListApodComponent } from './list-apod/list-apod.component';
import { Subscription } from 'rxjs';

export const info = { "media_type" : 'video'}

describe('ConstellationComponent', () => {


  let component: ConstellationComponent;
  let fixture: ComponentFixture<ConstellationComponent>;

 let store: MockStore<{
  loading: false,
  list: [],
  error: ''
}>;
  const initialState = {
    loading: false,
    list: [],
    error: ''
  };

  let paramMapSubscription = new Subscription();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstellationComponent,
        ListApodComponent,
    DetailApodComponent,
    ItemApodComponent
      ],
      imports: [RouterTestingModule],
      providers: [
        provideMockStore(),
      ],
    })
      .compileComponents();
      store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
