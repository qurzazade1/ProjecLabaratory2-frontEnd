import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
 
  templateUrl: './home.component.html',
  selector: 'app-home',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  regMode = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

 
// cancel register mode
  cancelRegMode(regMode: boolean) {
    this.regMode = regMode;
  }
//register toggle
  regToggle() {
    this.regMode = true;
  }

}
