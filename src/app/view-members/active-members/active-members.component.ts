import { ApiService } from '../../shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-members',
  templateUrl: './active-members.component.html',
  styleUrls: ['./active-members.component.css']
})
export class ActiveMembersComponent implements OnInit {
  activeMembers: any[];
  constructor(public apiService: ApiService) {
    this.getActiveMembers();
  }

  ngOnInit() {
  }

  getActiveMembers() {
    this.apiService.getActiveMembers().subscribe(data => {
      this.activeMembers = data;
    });
  }
}
