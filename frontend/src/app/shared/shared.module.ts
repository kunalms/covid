import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule
  ], exports: [
    BarChartComponent,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
