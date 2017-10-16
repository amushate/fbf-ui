import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage'
import {User} from '../fbf-ui-model/user';
import { HomeComponent } from '../home/home.component';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private storage: LocalStorageService, private router: Router) {};
  user: User;
  canActivate() {
    this.user = this.storage.retrieve('user');
    console.log("OnlyLoggedInUsers");
    if (this.user) {
      return true;
    }
    else {
      alert("You don't have permission to view this page");
     this.router.navigate(['']);
      return false;
    }
  }
}