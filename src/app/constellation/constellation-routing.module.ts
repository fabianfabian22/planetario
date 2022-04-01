import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstellationComponent } from './constellation.component';

const routes: Routes = [

  { path: '', component: ConstellationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstellationRoutingModule { }
