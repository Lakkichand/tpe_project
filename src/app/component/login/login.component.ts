import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService , User } from '../../shared/services/authentication.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: any = {};


  constructor(private _service: AuthenticationService,
    private _router: Router) { }


  // doLogin() {
  //   console.log('Data ', this.loginData);
  //   this._router.navigate(['Home']);
  // }


  public user = new User('', '');
  public errorMsg = '';

  doLogin() {
    console.log('Data ', this.user);
    if (!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }


}
