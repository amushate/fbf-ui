import {Injectable} from '@angular/core';
import {Http, Response, RequestOptionsArgs, RequestOptions} from '@angular/http';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable} from 'rxjs';

import {User} from '../fbf-ui-model/user';

@Injectable()
export class LoginService {

  loginUrl = `http://localhost:8080/fbf-api/api/user/login`;
  constructor(private storage: LocalStorageService, private http: Http) {}

  login(user: User): Observable<User> {
    console.log(user);
    return this.http.get(this.loginUrl + '?username=' + user.username + '&password=' + user.password)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
