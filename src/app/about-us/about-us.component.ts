import {FBFBoardMember} from '../fbf-ui-model/board-member';
import {User} from '../fbf-ui-model/user';
import {BoardMemberService} from '../shared/board-member.service';
import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  user: User;
  boardMembers: FBFBoardMember[];
  public selectedFiles;
  constructor(private storage: LocalStorageService, private boardMemberService: BoardMemberService) {
    this.getBoardmembers();
  }

  ngOnInit() {
    this.user = new User();
  }

  isLogged() {
    this.user = this.storage.retrieve('user');
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }

  getBoardmembers() {
    this.boardMemberService.getBoardMembers().subscribe(data => {
      this.boardMembers = data;
    });
  }

}
