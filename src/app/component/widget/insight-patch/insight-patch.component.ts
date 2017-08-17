import { Component, OnInit, Input } from '@angular/core';
import { InsightConstant } from './insight-patch.constant';

@Component({
  selector: 'app-insight-patch',
  templateUrl: './insight-patch.component.html',
  styleUrls: ['../../../app.component.css']
})
export class InsightPatchComponent implements OnInit {

  insightConst: any;
  // selectedPool: any;
  // @Input() poollist:any[] = [];

  @Input() insightData: any;

  constructor() { 
    this.insightConst = InsightConstant;
  }

  ngOnInit() {
  }

  
  updatePool(newPool: any) {
   
  }


}
