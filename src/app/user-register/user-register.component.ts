import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../userservices/authentication.service';
import { AlertService } from '../userservices/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegComponent implements OnInit {

  model: any = {};
  @Output() cancelUserReg = new EventEmitter();
  constructor(private authSer: AuthenticationService, private alert: AlertService) { }

  ngOnInit() {
  }
// is  used  to canceal registeration
  cancel() {
    this.cancelUserReg.emit(false);
  }

// the register method
  userRegister() {
    this.authSer.register(this.model).subscribe(() => {
      this.alert.success('registration was successful');
    }, error => {
      this.alert.error(error);
    });
  }



}
