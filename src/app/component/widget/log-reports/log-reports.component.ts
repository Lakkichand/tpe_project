import { Component, Input, OnInit } from '@angular/core';
import { ReportConstant } from './log-reports.constant';

@Component({
  selector: 'app-log-reports',
  templateUrl: './log-reports.component.html',
  styleUrls: ['../../../app.component.css']
})
export class LogReportsComponent implements OnInit {

  @Input() reportData: any;
  reportConst: any;

  constructor() { 
    this.reportConst=ReportConstant;
  }

  ngOnInit() {
  }

}
