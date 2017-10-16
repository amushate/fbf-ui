import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {LoginService} from '../../shared/login.service';
import {User} from '../../fbf-ui-model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  user = new User();
  constructor(private storage: LocalStorageService, private loginService: LoginService) {}

  ngOnInit() {
  }

  login() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.loginService.login(this.user).subscribe(data => {
      this.user = data;
      if (this.user) {
        this.storage.store('user', this.user);
        for (const permission of this.user.permissions) {
          console.log(permission);
        }
      }
      window.location.reload();
    });
  }

  clear() {
    this.username = '';
    this.password = '';
    console.log(this.user);
  }

}
