import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from './userservices/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authenticationService.decryptedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
