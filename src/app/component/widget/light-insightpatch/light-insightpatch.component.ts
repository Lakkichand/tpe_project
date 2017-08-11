import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { LightingInsightConstant } from './light-insightpatch.contant';
import { ModalboxComponent } from '../../shared/modalbox/modalbox.component';

@Component({
  selector: 'app-light-insightpatch',
  templateUrl: './light-insightpatch.component.html',
  styleUrls: ['./light-insightpatch.component.css']
})
export class LightInsightpatchComponent implements OnInit {

  lightInsightConst: any;
  @Input() lightinsightData: any;
  @ViewChild(ModalboxComponent) modalComponent: ModalboxComponent;
  @ViewChild('modalContainer') private modalContainer: ElementRef;

  constructor() {
    this.lightInsightConst = LightingInsightConstant;
  }

  ngOnInit() {
  }

  openModalpopup() {
    console.log('in  openModalpopup');
    this.modalComponent.openModal();
  }
}
