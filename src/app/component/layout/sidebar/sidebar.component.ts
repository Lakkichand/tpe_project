import { Component } from '@angular/core';
import { UserDetailService } from '../../../shared/services/user-detail.service';
import { ModaldialogComponent } from '../../shared/modaldialog/modaldialog.component';
import { KeycloakService } from '../../../shared/services/keycloak.service';
import { DialogService } from "ng2-bootstrap-modal";


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../../app.component.css']
})
export class SidebarComponent {
  menuList: any;
  siteMangerList: any;
  hoaList: any;

  constructor(private userDetailService: UserDetailService,
    private dialogService: DialogService,
    private KeycloakService: KeycloakService) {

    this.hoaList = [{
      name: 'Setting',
      tabName: 'Setting',
      imgName: 'icon_setting'
    }, {
      name: 'logout',
      tabName: 'Logut',
      imgName: 'icon_logout',
      count: 5
    }];

    this.siteMangerList = [{
      name: 'Dashboard',
      tabName: 'Dashboard',
      imgName: 'icon_dashboard',
      link: '/'
    }, {
      name: 'Notification',
      tabName: 'Notification',
      imgName: 'icon_notification',
      count: 5
    }, {
      name: 'Lighting',
      tabName: 'Lighting',
      imgName: 'icon_lighting',
      link: '/lighting'
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

    if (this.userDetailService.isHOAuser) {
      this.menuList = this.hoaList;
    }
    else if (this.userDetailService.isSiteManagerUser) {
      this.menuList = this.siteMangerList;
    }
  }


  signout() {
    KeycloakService.logout();
  }


  openDailog() {
    let disposable = this.dialogService.addDialog(ModaldialogComponent, {
      title: 'Confirm title',
      message: 'Confirm message'
    })
      .subscribe((isConfirmed) => {
        //We get dialog result
        if (isConfirmed) {
          alert('accepted');
        }
        else {
          alert('declined');
        }
      });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }
}
