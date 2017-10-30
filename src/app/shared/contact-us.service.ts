import {ContactMessage} from '../fbf-ui-model/contact.message';
import { serverIp } from './serverip';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class ContactUsService {

  mainUrl = serverIp + `/fbf-api/api/contact-us`;
  constructor(private http: Http) {}

  public sendData(contactMessage: ContactMessage): Observable<ContactMessage> {
    return this.http.post(this.mainUrl, contactMessage)
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
