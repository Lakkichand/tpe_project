import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalboxConstant } from './modalbox.constant';

@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css']
})
export class ModalboxComponent implements OnInit {

  modalConst: any;
  @ViewChild('modalContainer') private modalContainer: any;

  constructor() {
    this.modalConst = ModalboxConstant;
  }

  ngOnInit() {
  }

  openModal() {
    console.log('in  openModal');
    this.modalContainer.open();
  }

  modalClose() {
    this.modalContainer.close();
  }

}
