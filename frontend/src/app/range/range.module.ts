import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeComponent } from './range/range.component';
import { RangeRoutingModule } from './range-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MatSlideToggleModule} from '@angular/material';



@NgModule({
  declarations: [RangeComponent],
    imports: [
        CommonModule,
        RangeRoutingModule,
        SharedModule,
        MatSlideToggleModule
    ]
})
export class RangeModule { }
