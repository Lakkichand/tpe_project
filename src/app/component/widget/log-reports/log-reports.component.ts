import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-reports',
  templateUrl: './log-reports.component.html',
  styleUrls: ['./log-reports.component.css']
})
export class LogReportsComponent implements OnInit {

   @Input() reportData: any;
  
  constructor() { }

  ngOnInit() {
  }

}
