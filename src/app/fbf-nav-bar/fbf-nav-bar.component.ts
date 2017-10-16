import {Component, OnInit} from '@angular/core';
import {User} from '../fbf-ui-model/user';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-fbf-nav-bar',
  templateUrl: './fbf-nav-bar.component.html',
  styleUrls: ['./fbf-nav-bar.component.css']
})
export class FbfNavBarComponent implements OnInit {

  title = 'FBF';
  isLoggedIn: boolean;
  fbfServices = [`FBF Life`, `FBF Health`];
  user: User;
  constructor(private storage: LocalStorageService) {
   this.user = this.storage.retrieve('user');
    if (this.user) {
      this.isLoggedIn = true;
      this.user.username = 'amushate';
    } else {
      this.user = new User();
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    this.user = this.storage.retrieve('user');
    if (this.user) {
      this.isLoggedIn = true;
      this.user.username = 'amushate';
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
    console.log('logged out');
  }
}
