import { Component, Input, OnChanges} from '@angular/core';
import { ForgotPassService } from '../../service/forgot-pass.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-show-pass',
  template: `
              <p>{{message}}</p>
              <a routerLink="/login">back to login</a>
            `,
  styleUrls: ['./show-pass.component.css']
})
export class ShowPassComponent {
  message: string;
  subscription: Subscription;

  constructor(public forgotPassService: ForgotPassService) {
    this.message = forgotPassService.message;

    this.subscription = forgotPassService.messageChange.subscribe((value) => {
      this.message = value;
    });
  }

}
