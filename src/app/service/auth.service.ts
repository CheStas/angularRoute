import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsersService } from './users.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  isRegister = false;
  redirectUrl: string;

  constructor(public router: Router, public usersService: UsersService) {
    if (sessionStorage.getItem('isLoggedIn')) {
      this.isLoggedIn = true;
      this.usersService.setCurrentUser(JSON.parse(sessionStorage.getItem('isLoggedIn')));
    }
  }

  login(email, pass): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {

      if (this.usersService.checkPass(email, pass)) {
        this.isLoggedIn = true;
        this.usersService.setCurrentUser(email);
        sessionStorage.setItem('isLoggedIn', JSON.stringify(email));
      }
    });
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }

  register(user): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {
      if (this.usersService.checkEmail(user.email)) {
        return this.isRegister = true;
      }

      if (!this.isRegister) {
        this.usersService.addUser(user);
        this.usersService.addToStorage();
      }
    });
  }

}
