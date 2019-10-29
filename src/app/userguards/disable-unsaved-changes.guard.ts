
import { UserEditComponent } from '../users/user-edit/user-edit.component';
import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class DisableUnsavedChanges implements CanDeactivate<UserEditComponent> {
    canDeactivate(component: UserEditComponent) {
        if (component.editTheForm.dirty) {
            return confirm('Save changes befor leaving');
        }
        return true;
    }
}
