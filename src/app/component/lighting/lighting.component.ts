import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.css']
})
export class LightingComponent implements OnInit {

  insightArray: any[] = [];
  reportData: any[] = [];


  constructor() {
    this.loadInsightData();
    this.loadReportData();
  }

  loadInsightData() {
    this.insightArray = [{
      id:'site',
      current_month: {
        total_to_date_value: '56:44',
        total_to_date_amt: '231',
        avg_per_day_value: '30.04',
        avg_per_day_amt: '133',
      },
      last_month: {
        total_to_month_value: '56:44',
        total_to_month_amt: '231',
        avg_per_month_value: '30.04',
        avg_per_month_amt: '133',
      },
      powerUnit: 'kWh',
    }, {
      id:'group',
      current_month: {
        total_to_date_value: '56:44',
        total_to_date_amt: '231',
        avg_per_day_value: '30.04',
        avg_per_day_amt: '133',
      },
      last_month: {
        total_to_month_value: '56:44',
        total_to_month_amt: '231',
        avg_per_month_value: '30.04',
        avg_per_month_amt: '133',
      },
      powerUnit: 'kWh',
    }]
  }

  loadReportData() {
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
