import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage'
import {User} from '../fbf-ui-model/user';
import {HomeComponent} from '../home/home.component';
import * as _ from 'lodash';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  user: User;
  constructor(private storage: LocalStorageService, private router: Router) {};

  canActivate() {
    this.user = this.storage.retrieve('user');
    if (this.user && _.find(this.user.permissions, (role) => role.role === 'ADD_MEMBER')) {
      return true;
    } else {
      alert('You don\'t have permission to view this page');
      this.router.navigate(['']);
      return false;
    }
  }
}
