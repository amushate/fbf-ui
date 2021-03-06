import {Dependant} from '../fbf-ui-model/dependant';
import { serverIp } from './serverip';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class DependantService {

  mainUrl = serverIp + `/fbf-api/api`;
  addUrl = `/dependants/member/`;
  constructor(public http: Http) {}

  getMemberDependantsByMemberId(memberId: string): Observable<Dependant[]> {
    return this.http.get(this.mainUrl + `/members/` + memberId + `/ dependants`)
      .map(this.extractData).catch(this.handleError);
  }

  getMemberDependants(): Observable<Dependant[]> {
    return this.http.get(this.mainUrl + `/dependants`)
      .map(this.extractData).catch(this.handleError);
  }

  addDependant(memberId: number, depandant: Dependant): Observable<Dependant[]> {
    return this.http.post(this.mainUrl + this.addUrl + memberId, depandant)
      .map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }
  private handleError(error: Response | any) {
    return Observable.throw(error.status);
  }
}
