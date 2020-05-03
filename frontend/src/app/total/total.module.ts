import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalRoutingModule } from './total-routing.module';
import {SharedModule} from '../shared/shared.module';
import {TotalComponent} from './total/total.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [TotalComponent],
  imports: [
    CommonModule,
    TotalRoutingModule,
    SharedModule
  ]
})
export class TotalModule { }
