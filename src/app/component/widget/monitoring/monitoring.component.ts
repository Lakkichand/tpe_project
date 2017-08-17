import { Component, OnInit } from '@angular/core';
import { MonitoringConstant } from './monitoring.constant';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['../../../app.component.css']
})
export class MonitoringComponent implements OnInit {

  monitorConst: any;

  constructor() {
    this.monitorConst = MonitoringConstant;
  }

  ngOnInit() {
  }

}
