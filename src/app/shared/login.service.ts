import {Injectable} from '@angular/core';
import {Http, Response, RequestOptionsArgs, RequestOptions} from '@angular/http';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable} from 'rxjs';

import {User} from '../fbf-ui-model/user';
import { serverIp } from './serverip';

@Injectable()
export class LoginService {

  
  loginUrl = serverIp + `/fbf-api/api/user/login`;
  mainUrl = serverIp + `/fbf-api/api/user`;
  constructor(private storage: LocalStorageService, private http: Http) {}

  login(user: User): Observable<User> {
    return this.http.get(this.loginUrl + '?username=' + user.username + '&password=' + user.password)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createUser(user: User): Observable<User> {
    return this.http.post(this.mainUrl, user)
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
