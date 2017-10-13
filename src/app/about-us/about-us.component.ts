import { FBFBoardMember } from '../fbf-ui-model/board-member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  boardMembers: FBFBoardMember[
  
  ];
  constructor() { }

  ngOnInit() {
    
  }

}
