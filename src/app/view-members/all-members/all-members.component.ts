import { Member } from '../../fbf-ui-model/member';
import { ApiService } from '../../shared/api.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.css']
})
export class AllMembersComponent implements OnInit {
  allMembers: Member[];
  member = new Member();
  selectedMemberId: number;
  errorMessage: string;
  constructor(public apiService: ApiService, private modalService: BsModalService) {
    this.getAllMembers();
  }

  ngOnInit() {
  }

  getAllMembers() {
    this.apiService.getMembers().subscribe(data => {
      this.allMembers = data;
    }, error => { alert('Error Occured!'); }
    );
  }

  editMember(member: Member, index: number) {
    this.member = member;
    this.selectedMemberId = index;
  }


  updateMember(firstName: string, surname: string, nationalId: string, dob: Date) {
    this.member.firstName = firstName;
    this.member.nationalId = nationalId;
    this.member.surname = surname;
    this.member.dob = dob;
    this.apiService.updateMember(this.member, this.member.fbfMemberId)
      .subscribe(members => {
        this.fetchMembers();
      },
      error => this.errorMessage = <any>error);
  }

  fetchMembers(): void {
    this.apiService.getMembers()
      .subscribe(members => this.allMembers = members,
      error => this.errorMessage = <any>error);
  }

}
