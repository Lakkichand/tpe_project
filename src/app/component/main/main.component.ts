import { Component, OnInit } from '@angular/core';
import { KeycloakService }  from '../../shared/services/keycloak-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 
  
  constructor(private KeycloakService: KeycloakService) { 
    this.KeycloakService.getToken()
    .then(token => {
      var tokenData = {
        "token": token
      } 
    });

    KeycloakService.getAuth().authz.loadUserInfo().success(function(userData){
    // this.userInfo = userData; 
    console.log('userdata : ',userData );
    });
  }

  ngOnInit() {
  }

}
