import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable()
export class ForgotPassService {
  showPass = false;
  message: string;
  messageChange: Subject<string> = new Subject<string>();

  constructor(public router: Router, public usersService: UsersService) { }

  checkDataToShow(email) {
    if (this.usersService.checkEmail(email)) {
      this.showPass = true;
      this.message = `your email is ${email} and your password is ${this.usersService.getPass(email)}`;
    }

    if (!this.showPass) {
      this.message = 'email not found';
    }

    this.messageChange.next(this.message);
    this.router.navigate(['/forgot-pass/show']);
  }

}
