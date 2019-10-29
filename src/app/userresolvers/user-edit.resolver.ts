import { AuthenticationService } from '../userservices/authentication.service';
import {Injectable} from '@angular/core';
import {User} from '../usermodels/user';

import { catchError } from 'rxjs/operators';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../userservices/user.service';
import { Observable, of } from 'rxjs';
import { AlertService } from '../userservices/alert.service';


@Injectable()
export class UserEditResolver implements Resolve<User> {
    constructor(
        private authenticationService: AuthenticationService,
        private alertify: AlertService,  private router: Router, private userServ: UserService, ) {}
        
//retriveving user data based on username-->
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
      
        return this.userServ.getUserProfile
        ( this.authenticationService.decryptedToken.sub).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving  yourdata');
                this.router.navigate(['/members']) ;
                return of(null);
            })
        );
    }
}
