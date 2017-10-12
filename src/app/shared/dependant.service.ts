import { Dependant } from '../fbf-ui-model/dependant';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DependantService {

  constructor(public http: Http) { }

  getMemberDependantsByMemberId(memberId: string): Observable<Dependant[]> {
    return this.http.get(`http://localhost:8080/fbf-api/api/members/` + memberId + `/dependants`)
      .map(this.extractData).catch(this.handleError);
  }

  getMemberDependants(): Observable<Dependant[]> {
    return this.http.get(`http://localhost:8080/fbf-api/api/dependants`)
      .map(this.extractData).catch(this.handleError);
  }
  private extractData(res: Response) {
    return res.json();
  }
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
