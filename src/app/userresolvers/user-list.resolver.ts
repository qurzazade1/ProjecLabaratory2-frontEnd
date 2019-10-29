import {Injectable} from '@angular/core';
import {User} from '../usermodels/user';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../userservices/user.service';
import { AlertService } from '../userservices/alert.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserListResolver implements Resolve<User[]> {
    constructor(private userService: UserService, private router: Router,
        private alert: AlertService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers().pipe(
            catchError(error => {
                this.alert.error('Problem the retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
