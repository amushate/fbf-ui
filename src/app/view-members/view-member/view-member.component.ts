import { Dependant } from '../../fbf-ui-model/dependant';
import { Member } from '../../fbf-ui-model/member';
import { ApiService } from '../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css']
})
export class ViewMemberComponent implements OnInit {

  id: number;
  private sub: any;
  member$: Member;
  dependants: Dependant[];
  constructor(private service: ApiService, private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      this.service.getMember(this.id).subscribe(data => {
        this.member$ = data;
        console.log(this.member$);
      }, error => { alert('Error Occured!'); }
      );
    });
  }

  loadDependants() {
    this.service.getMemberDependants(this.member$.fbfMemberId).subscribe(data => {
        this.dependants = data;
        console.log(this.dependants);
      }, error => { alert('Error Occured!'); }
    );
  }

}
