import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  message: string;
  email: string;
  password: string;
  subscription: Subscription;

  constructor(public authService: AuthService, public router: Router) { }

  login() {
    this.message = 'Trying to log in ...';

    this.subscription = this.authService.login(this.email, this.password).subscribe(() => {
      if (this.authService.isLoggedIn) {

        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/main';

        this.router.navigate([redirect]);
      } else {
        this.message = 'wrong email or password';
      }
    });
  }

   ngOnDestroy() {
    if (this.subscription) {  this.subscription.unsubscribe(); }
  }
}
