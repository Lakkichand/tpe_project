import { Component } from '@angular/core';
import { TopbarConstant } from './topbar.constant';
import { HttpService } from '../../../shared/services/http.service';
import { KeycloakService }  from '../../../shared/services/keycloak-service';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
 
   topbarConst: any;

   constructor( private httpService: HttpService, private KeycloakService: KeycloakService ) {
        this.topbarConst = TopbarConstant;
    }

    signout(){
      KeycloakService.logout();
    }
}
