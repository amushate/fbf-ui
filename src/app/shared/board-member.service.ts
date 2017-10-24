import {FBFBoardMember} from '../fbf-ui-model/board-member';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class BoardMemberService {

  mainUrl = `http://localhost:8080/fbf-api/api/board-members`;
  constructor(private http: Http) {}

  getBoardMembers(): Observable<FBFBoardMember[]> {
    return this.http.get(this.mainUrl)
      .map(this.extractData).catch(this.handleError);
  }

  addMember(member: FBFBoardMember): Observable<FBFBoardMember[]> {
    return this.http.post(this.mainUrl, member)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateMember(member: FBFBoardMember, fbfMemberId: number): Observable<FBFBoardMember[]> {
    return this.http.put(this.mainUrl + '/' + fbfMemberId, member)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }
  private handleError(error: Response | any) {
    return Observable.throw(error.status);
  }

}
