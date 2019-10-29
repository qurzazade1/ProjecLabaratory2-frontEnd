import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/usermodels/user';
import { UserService } from 'src/app/userservices/user.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService} from '../../userservices/alert.service';
import {NgForm} from '@angular/forms';
import { AuthenticationService } from 'src/app/userservices/authentication.service';

@Component({
   styleUrls: ['./user-edit.component.css'],
  templateUrl: './user-edit.component.html',
  selector: 'app-member-edit'
})
export class UserEditComponent implements OnInit {
  @ViewChild('editForm') editTheForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editTheForm.dirty) {
      $event.returnValue = true;
    }
  }
  user: User;
  constructor(private authService: AuthenticationService ,private route: ActivatedRoute, private alerService: AlertService,
    private userService: UserService) { }
 
    // retriving user data from the route resolver
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }


  updateUserProfile() {
   this.userService.updateUserProfile(this.authService.decryptedToken.nameid, this.user).subscribe(next => {
      this.alerService.success('UserProfile updated successfully');
      this.editTheForm.reset(this.user);
   }, error => {
     this.alerService.error(error);
    });
  }
}


