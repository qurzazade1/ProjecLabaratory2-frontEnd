import { Component, OnInit } from '@angular/core';
import { User } from '../../usermodels/user';
import { UserService } from '../../userservices/user.service';
import { AlertService} from '../../userservices/alert.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//is used to send JWT token to the server
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

 @Component({
  templateUrl: './user-list.component.html',

  selector: 'app-user-list',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {
  users: User[];



  constructor(private userServ: UserService, private http: HttpClient, private alert: AlertService,
    private route: ActivatedRoute) { }
    
  ngOnInit() {
 
this.route.data.subscribe(data => {
  this.users = data['users'];
   //this.users = data;
});

console.log(this.users);

  }



}
