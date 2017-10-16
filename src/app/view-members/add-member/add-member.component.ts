import {Member} from '../../fbf-ui-model/member';
import {ApiService} from '../../shared/api.service';
import {Component, OnInit} from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  member: Member;
  members: Member[];
  errorMessage: any;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.member = new Member();
  }

  clear() {

  }

  save() {
    this.apiService.addMember(this.member)
      .subscribe(members => {
        this.reset();
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
        if (this.errorMessage.ok == false) {
          alert('Error saving member, contact admin.');
        }
      });
  }

  private reset() {
    this.member.firstName = null;
    this.member.nationalId = null;
    this.member.surname = null;
    this.member.address = null;
    this.member.dob = null;
    this.member.phoneNumber = null;
  }

  setMale() {
    this.member.gender = 'MALE';
    console.log('MALE');
  }

  setFemale() {
    this.member.gender = 'FEMALE';
    console.log('FEMALE');
  }

}
