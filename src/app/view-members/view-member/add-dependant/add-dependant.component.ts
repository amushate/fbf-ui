import {Dependant} from '../../../fbf-ui-model/dependant';
import { Member } from '../../../fbf-ui-model/member';
import {ApiService} from '../../../shared/api.service';
import {DependantService} from '../../../shared/dependant.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-dependant',
  templateUrl: './add-dependant.component.html',
  styleUrls: ['./add-dependant.component.css']
})
export class AddDependantComponent implements OnInit {
    member$: Member;
    id: number;
    sub: any;

  newDependant: Dependant;
  memberId: number;
  constructor(private dependantService: DependantService, private location: Location, private router: Router
    , private route: ActivatedRoute, private memberService: ApiService) {}

  ngOnInit() {
    this.newDependant = new Dependant();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.memberService.getMember(this.id).subscribe(data => {
        this.member$ = data;
      }, error => {alert('Error Occured!');}
      );
    });
  }

  addDependant() {
    this.dependantService.addDependant(this.member$.fbfMemberId, this.newDependant).subscribe(data => {
      alert('Dependant Saved!');
      this.location.back();
    }, error => {
      alert('Error Saving Dependant!');
    });
  }

  cancel() {
    this.location.back();
  }



}
