  import { Component, OnInit } from '@angular/core';
  import { User } from '../../usermodels/user';
  import { UserService } from '../../userservices/user.service';
  import { AlertService } from '../../userservices/alert.service';
  import { ActivatedRoute } from '@angular/router';
  import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

  @Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
  })
  export class UserDetailComponent implements OnInit {

    thegalleryOptions: NgxGalleryOptions[];
    theUser: User;
    galleryPhotos: NgxGalleryImage[];

    constructor(private userService: UserService, private alert: AlertService,
      private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.data.subscribe(data => {
        this.theUser = data['user'];
      });

      this.thegalleryOptions = [
        {
          height: '490px',
          width: '490px',
          imagePercent: 100,
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false
        }
      ];
      this.galleryPhotos = this.getPhotos();
    }
    //used to check if the user logged in
    signed() {
      const token = localStorage.getItem('token');
      if (token != null) {
      return true;
    }    else {
      return false;
      }
    }
    getPhotos() {
      const  photoUrls = [];
      for (let i = 1; i <= this.theUser.photos.length; i++) {
        photoUrls.push({
          small: this.theUser.photos[i - 1].url,
          medium: this.theUser.photos[i - 1].url,
          big: this.theUser.photos[i - 1].url,
          description: this.theUser.photos[i - 1].description
        });
      }
      return photoUrls;
    }

  }
