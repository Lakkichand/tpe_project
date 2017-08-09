import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../shared/services/keycloak.service';
import { UserDetailService } from '../../shared/services/user-detail.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userDetails: any;

  constructor(private keycloakService: KeycloakService, private userDetailService: UserDetailService) {

    this.keycloakService.getToken()
      .then(token => {
        var tokenData = {
          "token": token
        }
      });

  }

  ngOnInit() {
  }

}
