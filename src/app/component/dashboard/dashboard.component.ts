import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../app.component.css']
})
export class DashboardComponent implements OnInit {

  insightArray: any[] = [];
  reportData: any[] = [];
  selectedPoolMontior: any;
  pools: any[] = [];
  loadTime: any;
  tableHeader: any[]=[];
  alertTableData: any[]=[];

  constructor() {
    this.getTime();
    this.getMonitorPools();
    this.loadInsightData();
    this.loadReportData();
    this.loadAlert();

  }

  ngOnInit() {

  }


  loadAlert()
  {
    this.tableHeader = [ {
			name : 'Status',
			id : 'status',
			type : 'string',
			color : 'black'
		}, {
			name : 'Level',
			id : 'level',
			type : 'string',
			color : 'blue'
		}, {
			name : 'Alert Type',
			id : 'type',
			type : 'string',
			color : 'black'
		}, {
			name : 'Logged',
			id : 'logged',
			type : 'string',
			color : 'black'
		}, {
			name : 'Zone/Device',
			id : 'device',
			type : 'string',
			color : 'black'
		}, {
			name : 'Description',
			id : 'desc',
			type : 'string',
			color : 'black'
		}, {
			name : 'Reported',
			id : 'reported',
			type : 'string',
			color : 'black'
		}, {
			name : 'Resolved',
			id : 'resolved',
			type : 'string',
			color : 'blue'
		}, {
			name : 'Action',
			id : 'action',
			type : 'string',
			color : 'black'
		} ];


    this.alertTableData=[];
  }

  getTime() {
    this.loadTime = new Date();
  }

  loadInsightData() {
    this.insightArray = [{
      id: 'lights',
      lights_istalled: '65',
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
      last_updated: this.loadTime,
      powerUnit: 'kWh',
    }, {
      id: 'pool',
      status: 'Open',
      temp: 'Outside Threshold',
      chem_level: 'Acceptable',
      man_closed: 'No ',
      last_Reported: this.loadTime,
      pool_list: this.pools
    }, {
      id: 'irrigation',
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
      last_updated: this.loadTime,
      powerUnit: 'gals',

    }]
  }

  loadReportData() {
    this.reportData = [{
      time: '4 December 22:11',
      type: 'Light above Jess (blue top) was flickering on and off. Very annoying and definitely something not right for sure.',
      reporter: 'Lucy Stephenson',
      status: 'Resolved'
    }, {
      time: '3 December 8:43',
      type: 'Light above Jess (blue top) was flickering on and off. Very annoying and definitely something not right for sure.',
      reporter: 'Stan Webber ',
      status: 'Resolved'
    }, {
      time: '3 December 22:53',
      type: 'Light above Jess (blue top) was flickering on and off. Very annoying and definitely something not right for sure.',
      reporter: 'Lucy Stephenson ',
      status: 'Resolved'
    }, {
      time: '1 December 23:56',
      type: 'Light above Jess (blue top) was flickering on and off. Very annoying and definitely something not right for sure.',
      reporter: 'Lucy Stephenson',
      status: 'Resolved'
    }]

  }

  getMonitorPools() {
    this.pools = [
      { id: 0, key: 'Pool', value: 'Main Pool Chemical Level' },
      { id: 1, key: 'Light', value: 'Main Light Power consumption' },
      { id: 2, key: 'irrigation', value: 'Water consumption' }

    ];


    if (this.selectedPoolMontior == null) {
      this.selectedPoolMontior = this.pools[0];
    }
  }


  updatePool(newPool: any) {
    this.selectedPoolMontior = newPool;
    console.log('pool selected', this.selectedPoolMontior);
  }

}
