import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { HomeComponent } from './home/home.component';
import { UserRegComponent } from './user-register/user-register.component';
import { ErrorInterceptorProvider } from './userservices/error.interceptor';
import { AlertService} from './userservices/alert.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { ListsComponent } from './user-lists/lists.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { appRoutes } from './routes/routes';
import { AuthenticationGuard} from './userguards/authentication.guard';
import { AppComponent } from './app.component';
import { NavComponent } from './nav-bar/nav.component';
import { AuthenticationService } from './userservices/authentication.service';

import { UserService } from './userservices/user.service';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailResolver } from './userresolvers/user-detail.resolver';
import { UserListResolver } from './userresolvers/user-list.resolver';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserEditResolver } from './userresolvers/user-edit.resolver';
import { DisableUnsavedChanges } from './userguards/disable-unsaved-changes.guard';

export function tokenObtainer() {
  console.log(localStorage.getItem('token'));
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    UserRegComponent,
    UserListComponent,
    ListsComponent,
    UserMessagesComponent,
    UserCardComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenObtainer,
       whitelistedDomains: ['localhost:8080'],
        }
    })
  ],
  providers: [
       AlertService,
      AuthenticationService,
      ErrorInterceptorProvider,
      UserService,
      UserDetailResolver,
      UserListResolver,
      UserEditResolver,
      DisableUnsavedChanges
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
