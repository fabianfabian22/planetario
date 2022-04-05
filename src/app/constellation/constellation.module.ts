import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstellationRoutingModule } from './constellation-routing.module';
import { ConstellationComponent } from './constellation.component';
import { ListApodComponent } from './list-apod/list-apod.component';
import { DetailApodComponent } from './detail-apod/detail-apod.component';
import { ItemApodComponent } from './item-apod/item-apod.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CostallationReducer } from './state/costallation.reducers';
import { CostallationEffects } from './state/costallation.effects';
import { SafePipe } from '../shared/pipes/safe.pipe';


@NgModule({
  declarations: [
    ConstellationComponent,
    ListApodComponent,
    DetailApodComponent,
    ItemApodComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    ConstellationRoutingModule,
    StoreModule.forFeature("apods", CostallationReducer ),
    EffectsModule.forFeature([CostallationEffects]),
  ],
  exports: [
    ListApodComponent,
    DetailApodComponent,
    ItemApodComponent
  ]
})
export class ConstellationModule { }
