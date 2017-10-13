import { Member } from '../fbf-ui-model/member';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  mainUrl = `http://localhost:8080/fbf-api/api`;
  memberDependantUrl = this.mainUrl + '/dependants/member';
  allmemberUrl = this.mainUrl + `/members`;
  activeMembersUrl = this.mainUrl + `/members/active-members`;
  addmemberUrl = this.mainUrl + `/members`;
  updateMemberUrl = this.mainUrl + `/members/`;
  constructor(public http: Http) { }

  getMembers(): Observable<Member[]> {
    return this.http.get(this.allmemberUrl).map(this.extractData).catch(this.handleError);
  }

  getMember(memberId: number): Observable<Member> {
    return this.http.get(this.updateMemberUrl + memberId).map(this.extractData).catch(this.handleError);
  }
  getActiveMembers(): Observable<Member[]> {
    return this.http.get(this.activeMembersUrl).map(this.extractData).catch(this.handleError);
  }

  getMemberDependants(memberId: number) {
    return this.http.get(this.memberDependantUrl + '/' + memberId).map(this.extractData).catch(this.handleError);
  }

  addMember(member: Member): Observable<Member[]> {
    return this.http.post(this.addmemberUrl, member)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  updateMember(member: Member, fbfMemberId: number): Observable<Member[]> {
    return this.http.put(this.updateMemberUrl + fbfMemberId, member)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    return res.json();
  }
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}

