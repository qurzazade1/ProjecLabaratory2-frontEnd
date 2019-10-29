//
import { AlertService } from './alert.service';
import { TestBed, async, inject } from '@angular/core/testing';


describe('Service: Alertify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService]
    });
  });

  it('should ...', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});
