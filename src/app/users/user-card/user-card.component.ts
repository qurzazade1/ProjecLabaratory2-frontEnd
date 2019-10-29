import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../usermodels/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() childuser: User;

  constructor() { }

  ngOnInit() {
  }
  signed() {
    const token = localStorage.getItem('token');
    if (token != null) {
    return true;
  }    else {
    return false;
    }
  }

}
