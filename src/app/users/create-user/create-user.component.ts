import {User} from '../../fbf-ui-model/user';
import {LoginService} from '../../shared/login.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User;
  constructor(private userService: LoginService) {}

  ngOnInit() {
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.user).subscribe(data => {
      alert('User Saved!');
      console.log(data);
    }, error => {
      alert('Error Saving User!');
    });
  }

  clear() {
    this.user = new User();
  }

}
