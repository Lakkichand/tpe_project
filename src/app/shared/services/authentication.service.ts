import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(
    public username: string,
    public password: string) { }
}

var users = [
  new User('admin@admin.com', 'adm9'),
  new User('admin', 'persistent'),
  new User('user1@gmail.com', 'a23')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router) { }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user) {

    var authenticatedUser = users.find(u => u.username === user.username);
    console.log('in login service')
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", authenticatedUser.username);
      this._router.navigate(['home']);
      return true;
    }
    return false;

  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['Login']);
    }
  }
}