import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TotalComponent} from './total/total.component';

const routes: Routes = [
  {
    path: '',
    component: TotalComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotalRoutingModule {
}
