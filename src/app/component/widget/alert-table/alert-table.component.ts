import { Component, OnInit, Input } from '@angular/core';
import { AlertConstant } from './alert-table.constant'

@Component({
  selector: 'app-alert-table',
  templateUrl: './alert-table.component.html',
  styleUrls: ['../../../app.component.css']
})
export class AlertTableComponent implements OnInit {

  alertConst: any;
  @Input() alertthead: any[];

  constructor() {
    this.alertConst = AlertConstant;
  }

  ngOnInit() {
  }

}
