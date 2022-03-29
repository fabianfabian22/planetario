import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstellationRoutingModule } from './constellation-routing.module';
import { ConstellationComponent } from './constellation.component';
import { ListApodComponent } from './list-apod/list-apod.component';
import { DetailApodComponent } from './detail-apod/detail-apod.component';
import { ItemApodComponent } from './item-apod/item-apod.component';


@NgModule({
  declarations: [
    ConstellationComponent,
    ListApodComponent,
    DetailApodComponent,
    ItemApodComponent
  ],
  imports: [
    CommonModule,
    ConstellationRoutingModule
  ]
})
export class ConstellationModule { }
