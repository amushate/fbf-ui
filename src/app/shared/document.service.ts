import {FBFDocument} from '../fbf-ui-model/fbf-document';
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class DocumentService {
  options: RequestOptions;
  headers: Headers;
  mainUrl = `http://localhost:8080/fbf-api/api/upload`;
  constructor(public http: Http) {

  }

  addDocument(document: FBFDocument, file: File): Observable<FBFDocument> {
    this.headers = new Headers({'file': file, 'document': document, });

    this.options = new RequestOptions({headers: this.headers});
    return this.http.post(this.mainUrl, document, this.options)
      .map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }
  private handleError(error: Response | any) {
    return Observable.throw(error.status);
  }
}
