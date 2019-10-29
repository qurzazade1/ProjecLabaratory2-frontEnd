import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../userservices/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from '../userservices/alert.service';


@Component({

  styleUrls: ['./nav.component.css'],
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthenticationService, private alert: AlertService,
      private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    this.alert.m('logged out');
    this.router.navigate(['/home']);
  }

  signed() {
    const token = localStorage.getItem('token');
    if (token != null) {
    return true;
  }    else {
    return false;
    }
  }
  login() {
    this.authService.signIn(this.model).subscribe(next => {
      this.alert.success('Logged in successfully');
    }, error => {
      this.alert.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }



}
