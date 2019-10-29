import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
//used dring trubleshooting
export class AlertService {
  constructor() {}

 
  error(m: string) {
    alertify.error(m);
  }
  m(m: string) {
    alertify.message(m);
  }

  success(m: string) {
    alertify.success(m);
  }
  confirm(m: string, okCallback: () => any) {
    alertify.confirm(m, function(e) {
      if (e) {
        okCallback();
      } else {}
    });
  }

  warning(m: string) {
    alertify.warning(m);
  }

 
}
