import {Component, OnInit} from '@angular/core';
import {StateService} from '../../services/state.service';
import {PatientService} from '../../services/patient.service';
import {MatSelectChange} from '@angular/material';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss', '../../app.component.scss']
})
export class RangeComponent implements OnInit {

  originalChartData;
  chartData;
  states = [];
  selected = '';
  showUnClassifiedData = false;

  constructor(private stateService: StateService, private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.stateService.getAll().subscribe((states) => {
      this.states = states;
    });
    this.generateData();
  }

  generateData() {
    this.patientService.getRange(this.selected).subscribe((chartData) => {
      this.originalChartData = JSON.parse(JSON.stringify(chartData));
      this.filterResults();
    });
  }

  filterResults() {
    if (this.showUnClassifiedData) {
      this.chartData = JSON.parse(JSON.stringify(this.originalChartData));
    } else {
      this.chartData = this.originalChartData.filter((item) => {
        return item[0] !== 'unclassified';
      });
    }
  }

  toggleDataVisibility() {
    this.showUnClassifiedData = !this.showUnClassifiedData;
    this.filterResults();
  }
}
