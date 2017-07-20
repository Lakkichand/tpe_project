import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insight-patch',
  templateUrl: './insight-patch.component.html',
  styleUrls: ['./insight-patch.component.css']
})
export class InsightPatchComponent implements OnInit {

   @Input() insightData: any;
  constructor() { }

  ngOnInit() {
  }

}
