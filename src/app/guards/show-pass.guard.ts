import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ForgotPassService } from '../service/forgot-pass.service';

@Injectable()
export class ShowPassGuard implements CanActivate, CanActivateChild {
  constructor(private forgotPassService: ForgotPassService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.forgotPassService.showPass || (!this.forgotPassService.showPass && this.forgotPassService.message)) {
        return true;
      }
      return false;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
    }
}
