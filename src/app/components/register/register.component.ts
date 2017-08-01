import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../users';
import { AuthService } from '../../service/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  user = new User();
  helloMessage: string;
  subscription: Subscription;

  constructor(public authService: AuthService, public router: Router) { }

  joinUser() {
    this.helloMessage = 'Checking information...';
    this.subscription = this.authService.register(this.user).subscribe(() => {
      if (this.authService.isRegister) {
        this.helloMessage = 'this email has been registered';
      } else {
        this.helloMessage = `Welcome, ${this.user.name}! Log in and enjoy! You will be moved in login page in 2s`;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {  this.subscription.unsubscribe(); }
  }
}
