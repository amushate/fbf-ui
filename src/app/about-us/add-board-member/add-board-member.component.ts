import {FBFBoardMember} from '../../fbf-ui-model/board-member';
import {BoardMemberService} from '../../shared/board-member.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-board-member',
  templateUrl: './add-board-member.component.html',
  styleUrls: ['./add-board-member.component.css']
})
export class AddBoardMemberComponent implements OnInit {

  boardMember: FBFBoardMember;
  constructor(private boardMemberService: BoardMemberService) {}

  ngOnInit() {
    this.boardMember = new FBFBoardMember();
  }

  save() {
    console.log(this.boardMember);
    this.boardMemberService.addMember(this.boardMember).subscribe(data => {
      window.alert('Board member Saved');
    });
  }

  clear() {
    this.boardMember = new FBFBoardMember();
  }

}
