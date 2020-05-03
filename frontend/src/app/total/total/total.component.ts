import { Component, OnInit } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {StateService} from '../../services/state.service';
import {PatientService} from '../../services/patient.service';
import {MatSelectChange} from '@angular/material';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss', '../../app.component.scss']
})
export class TotalComponent implements OnInit {

  originalChartData;
  chartData;
  states = [];

  dayFilterOption = [
    {
      value: 5,
      label: 'Last 5 days'
    },
    {
      value: 10,
      label: 'Last 10 days'
    },
    {
      value: 15,
      label: 'Last 15 days'
    },
    {
      value: 20,
      label: 'Last 20 days'
    },
    {
      value: 25,
      label: 'Last 25 days'
    },
    {
      value: 30,
      label: 'Last 30 days'
    },
    {
      value: 40,
      label: 'Last 40 days'
    },
    {
      value: 50,
      label: 'Last 50 days'
    },
    {
      value: 60,
      label: 'Last 60 days'
    },
    {
      value: -1,
      label: 'From Beginning'
    }
  ];
  selected = '';
  selectedDays = 15;

  constructor(private stateService: StateService, private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.stateService.getAll().subscribe((states) => {
      this.states = states;
    });
    this.generateData();
  }

  generateData() {
    this.patientService.getTotal(this.selected).subscribe((chartData) => {
      this.originalChartData = JSON.parse(JSON.stringify(chartData));
      this.filterResults();
    });
  }

  filterResults() {
    if (this.selectedDays === -1) {
      this.chartData = JSON.parse(JSON.stringify(this.originalChartData));
    } else {
      this.chartData = this.originalChartData.slice(this.originalChartData.length - this.selectedDays, this.originalChartData.length);
    }
  }
}
