import { Injectable } from '@angular/core';

import { AuthenticationService } from '../userservices/authentication.service';
import { CanActivate, Router } from '@angular/router';
import { AlertService } from '../userservices/alert.service';
// the injectable makes the guard avialble through whole project
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor( private router: Router, private authenticationService: AuthenticationService,
    private alert: AlertService) {}

  canActivate(): boolean {
    if (this.authenticationService.signed()) {
      return true;
    }

    this.alert.error('You will  not login!!!');
    this.router.navigate(['/home']);
    return false;
  }
}
