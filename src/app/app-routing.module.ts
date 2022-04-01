import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailApodComponent } from './constellation/detail-apod/detail-apod.component';

const routes: Routes = [
 { path: '',  redirectTo: 'dashboard' ,  pathMatch:'full' },
  { path: 'dashboard', loadChildren: () => import('./constellation/constellation.module').then(m => m.ConstellationModule) },
  { path: "dashboard/detail/:date", component: DetailApodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
