import {Component, OnInit} from '@angular/core';
import {User} from '../fbf-ui-model/user';
import {LocalStorageService} from 'ngx-webstorage';
import * as _ from 'lodash';

@Component({
  selector: 'app-fbf-nav-bar',
  templateUrl: './fbf-nav-bar.component.html',
  styleUrls: ['./fbf-nav-bar.component.css']
})
export class FbfNavBarComponent implements OnInit {
  role: string;
  roleAttempt: string;
  roles: string[];

  searchtext: string;
  title = 'FBF';
  isLoggedIn: boolean;
  isAdmin: boolean;
  fbfServices = [`FBF Life`, `FBF Health`];
  user: User;
  constructor(private storage: LocalStorageService) {
    this.user = this.storage.retrieve('user');
    if (this.user) {
      this.isLoggedIn = true;
      console.log(_.find(this.user.permissions, (role) => role.role === 'ADD_MEMBER') ? true : false);
      if (_.find(this.user.permissions, (role) => role.role === 'ADD_MEMBER')) {
        this.isAdmin = true;
        console.log('ipapo');
      }
    } else {
      this.user = new User();
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    this.user = this.storage.retrieve('user');
    if (this.user) {
      this.isLoggedIn = true;
    } else {
      this.user = new User();
      this.isLoggedIn = false;
    }
  }

  canEditMembers() {
    if (this.user && this.user.username) {
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.storage.clear();
  }

  search() {
    console.log(this.searchtext);
    this.searchtext = '';
  }
}
