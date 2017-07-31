import {Injectable} from '@angular/core';

declare var Keycloak: any;

declare var auth: any;


@Injectable()
export class KeycloakService {


  static auth : any = {};

  static logoutRedirectURI = "/index.html";

  static init() : Promise<any>{
    let keycloakAuth : any = new Keycloak('./config/keycloak.json');
    KeycloakService.auth.loggedIn = false;

    return new Promise((resolve,reject)=>{
      keycloakAuth.init({ onLoad: 'login-required'})
        .success( () => {
          KeycloakService.auth.loggedIn = true;
          KeycloakService.auth.authz = keycloakAuth;
          KeycloakService.auth.logoutUrl = keycloakAuth.createLogoutUrl({redirectUri: window.location.protocol + "//" + window.location.host + KeycloakService.logoutRedirectURI});
          resolve(null);
        })
        .error(()=> {
          reject(null);
        });
    });
  }

  static getAuth(){
    return auth;
  }

  static logout(){
    KeycloakService.auth.loggedIn = false;
    KeycloakService.auth.authz = null;

    window.location.href = KeycloakService.auth.logoutUrl;
  }

  getToken(): Promise<string>{
    return new Promise<string>((resolve,reject)=>{
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz.updateToken(5).success(function() {
          resolve(<string>KeycloakService.auth.authz.token);
        })
          .error(function() {
            reject('AUTH_ERROR');
            KeycloakService.logout();
          });
      }
    });
  }

}
