import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuList: any;

  constructor() {
    this.menuList = [{
      name: 'Dashboard',
      tabName: 'Dashboard',
      imgName: 'icon_dashboard'
    }, {
      name: 'Notification',
      tabName: 'Notification',
      imgName: 'icon_notification',
      count: 5
    }, {
      name: 'Lighting',
      tabName: 'Lighting',
      imgName: 'icon_lighting'
    }, {
      name: 'Pools',
      tabName: 'Pools',
      imgName: 'icon_pools'
    }, {
      name: 'Irrigation',
      tabName: 'Irrigation',
      imgName: 'icon_irrigation'
    }, {
      name: 'History',
      tabName: 'History',
      imgName: 'icon_history'
    }, {
      name: 'Configuration',
      tabName: 'Configuration',
      imgName: 'icon_configuration'
    }];
  }

 openDailog(){

 }
}
