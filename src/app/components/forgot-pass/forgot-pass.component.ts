import { Component, OnInit } from '@angular/core';
import { ForgotPassService } from '../../service/forgot-pass.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  expression: string;
  correct: number;
  answer: number;
  message: string;
  email: string;
  hide: boolean;

  constructor(public forgotPassService: ForgotPassService) { }

  ngOnInit() {
    this.createCaptcha();
  }

  createCaptcha() {
    this.expression = this.getRandom(1, 10) + '*' + this.getRandom(1, 10);
    this.correct = eval(this.expression);
  }

  checkAnsewer() {
    if (this.answer === this.correct) {
      this.message = '';
      this.forgotPassService.checkDataToShow(this.email);
      this.hide = this.forgotPassService.showPass;
    } else {
      this.message = 'wrong answer';
    }
  }

  getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
