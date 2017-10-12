import { Member } from '../fbf-ui-model/member';
import { ApiService } from '../shared/api.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css']
})
export class ViewMembersComponent implements OnInit {
  members: Member[];
  member = new Member();
  public modalRef: BsModalRef;
  errorMessage: String;
  
  constructor(public apiService: ApiService, private modalService: BsModalService) {}

  ngOnInit() {
  }




  private reset() {
    this.member.firstName = null;
    this.member.nationalId = null;
    this.member.surname = null;
  }

  fetchMembers(): void {
    this.apiService.getMembers()
      .subscribe(members => this.members = members,
      error => this.errorMessage = <any>error);
  }



  private populateMember(firstName: string, surname: string, nationalId: string) {
    this.member.firstName = firstName;
    this.member.surname = surname;
    this.member.nationalId = nationalId;
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addMember(firstName: any, surname: any, nationalId: any ) {
    this.populateMember(firstName.value, surname.value, nationalId.value);
    this.apiService.addMember(this.member)
      .subscribe(members => {
        this.fetchMembers();
        this.reset();
      },
      error => this.errorMessage = <any>error);
    this.modalRef.hide();
  }
  
  addDependant(firstName: any, surname: any, nationalId: any ) {
    this.populateMember(firstName.value, surname.value, nationalId.value);
    this.apiService.addMember(this.member)
      .subscribe(members => {
        this.fetchMembers();
        this.reset();
      },
      error => this.errorMessage = <any>error);
    this.modalRef.hide();
  }

}
