import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'total'},
  {
    path: 'total',
    loadChildren: () => import('./total/total.module').then(m => m.TotalModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./range/range.module').then(m => m.RangeModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
