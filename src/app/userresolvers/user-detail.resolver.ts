import {Injectable} from '@angular/core';

import { UserService } from '../userservices/user.service';
import {User} from '../usermodels/user';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AlertService } from '../userservices/alert.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserDetailResolver implements Resolve<User> {
    constructor(private router: Router,
        private alert: AlertService, private userServ: UserService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userServ.getUser(route.params['id']).pipe(
            catchError(error => {
                this.alert.error('Problem retrieving user data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
