import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as jwt_decode from 'jwt-decode';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
//context path
  mainUrl = environment.apiUrl;
  //provided readiable information after decoding
  decryptedToken: any;
 // for JWT token decription
  jwtHelper = new JwtHelperService();


  constructor(private http: HttpClient) {}
 
//login
  signed() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
//register

  register(model: any) {
    return this.http.post(this.mainUrl + 'register', model);
  }
//Login method is used to retrive the JWT token
  signIn(model: any) {
    return this.http.post(this.mainUrl + 'authenticate', model).pipe(
      map((response: any) => {
        const registereduser = response;
        if (registereduser) {
          localStorage.setItem('token', registereduser.token);
          this.decryptedToken = this.jwtHelper.decodeToken(registereduser.token);
         // console.log(this.decryptedToken.sub);
        }
      })
    );
  }


}
