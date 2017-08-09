
import { Injectable } from "@angular/core";
import { KeycloakService } from "./keycloak.service";

@Injectable()
export class UserDetailService {

    userDetails: any;
    isHOAuser: boolean = false;
    isSiteManagerUser: boolean = false;


    constructor(private keycloakService: KeycloakService) {
        this.setUserDetails();
    }

    setUserDetails() {
        let roles = this.keycloakService.getUserDetails().authz.realmAccess.roles;
        this.isHOAuser = roles.some(x => x === "hoa");
        this.isSiteManagerUser = roles.some(x => x === "site_manager");

        // this.keycloakService.getUserDetails().authz.loadUserInfo().success(function (data) {
        //     this.userDetails = data.name;
        // })

        // console.log('isHOAuser :', this.isHOAuser );
        // console.log('isSiteManagerUser :', this.isSiteManagerUser );
        // console.log('userDetails :', this.userDetails );

    }



}
