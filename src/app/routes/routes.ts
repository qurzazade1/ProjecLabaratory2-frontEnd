import {Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserListComponent } from '../users/user-list/user-list.component';
import { UserMessagesComponent } from '../user-messages/user-messages.component';
import { ListsComponent } from '../user-lists/lists.component';
import { AuthenticationGuard } from '../userguards/authentication.guard';
import { UserDetailComponent } from '../users/user-detail/user-detail.component';
import { UserDetailResolver } from '../userresolvers/user-detail.resolver';
import { UserListResolver } from '../userresolvers/user-list.resolver';
import { UserEditComponent } from '../users/user-edit/user-edit.component';
import { UserEditResolver } from '../userresolvers/user-edit.resolver';
import { DisableUnsavedChanges } from '../userguards/disable-unsaved-changes.guard';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
  {  path: 'members', component: UserListComponent,
                resolve: {users: UserListResolver} },
                {path: 'members/:id', component: UserDetailComponent,
                resolve: {user: UserDetailResolver}},
    {
        path: '',     
        runGuardsAndResolvers: 'always',
        canActivate: [AuthenticationGuard],
        children: [
            {path: 'members', component: UserListComponent,
                resolve: {users: UserListResolver}},
       
                {path: 'member/edit', component: UserEditComponent,
                resolve: {user: UserEditResolver}, canDeactivate: [DisableUnsavedChanges]},
                {path: 'messages', component: UserMessagesComponent},
            {path: 'lists', component: ListsComponent},
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
