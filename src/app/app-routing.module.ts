import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '',  redirectTo: 'dashboard' ,  pathMatch:'full' },
  { path: 'dashboard', loadChildren: () => import('./constellation/constellation.module').then(m => m.ConstellationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
