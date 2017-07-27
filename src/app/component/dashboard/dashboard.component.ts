import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  insightArray: any[] = [];
  reportData: any[] = [];

  constructor() {
    this.insightArray = [{
      insightHeading: 'Lights',
      insightValue: '17:44',
      insightUnit: 'kWh',
      insightInfo_1: 'peak in past 24hrs ',
      insightInfo_2: 'peak time 06:30'
    }, {
      insightHeading: 'Pool',
      insightValue: 'Open',
      insightUnit: 'levels acceptable',
      insightInfo_1: 'next manual test ',
      insightInfo_2: 'scheduled 09:45'
    }, {
      insightHeading: 'Irrigation',
      insightValue: '4544',
      insightUnit: 'gallons (avg per week)',
      insightInfo_1: '10000sqft of lawn',
      insightInfo_2: 'avg weekly cost $39'

    }]


    this.reportData = [{
      time: '4 December 22:11',
      topic: 'BBQ area light flickering',
      reporter: 'Lucy Stephenson (Appt 48)',
      assets: 'View'
    }, {
      time: '3 December 8:43',
      topic: 'A lot of leaves in the pool area this morning',
      reporter: 'Stan Webber (Appt 32A)',
      assets: 'None'
    }, {
      time: '3 December 22:53',
      topic: 'Broken glass discovered in the parking lot.',
      reporter: 'Lucy Stephenson (Appt 48)',
      assets: 'View'
    }, {
      time: '1 December 23:56',
      topic: 'Daily pool report auto-generated. Now available in reports',
      reporter: 'System Report',
      assets: 'View'
    }]
  }

  ngOnInit() {

  }

}
