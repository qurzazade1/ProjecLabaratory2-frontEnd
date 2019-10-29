import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../usermodels/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'getAllUsers');
  }

  getUser(id: any): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'getUser/' + id);
  }
  getUserProfile(username: any): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'getUserProfile/' + username);
  }
  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'users/' + id, user);
  }
  updateUserProfile(username: string, user: User) {
    return this.http.put(this.baseUrl + 'users/' + username, user);
  }


}
