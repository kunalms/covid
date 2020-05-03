import {Component, OnInit} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {Router} from '@angular/router';
import {StateService} from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  darkTheme = false;
  isTotalTabActive = false;
  isRangeTabActive = false;

  constructor(private router: Router, private stateService: StateService) {
    this.router.events.subscribe(val => {
      this.isTotalTabActive = this.router.url === '/total';
      this.isRangeTabActive = this.router.url === '/range';
    });
  }

}
