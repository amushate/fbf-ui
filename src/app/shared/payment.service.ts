import {Payment} from '../fbf-ui-model/payment';
import { UIPaymentRequest } from '../fbf-ui-model/paymentrequest';
import { serverIp } from './serverip';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class PaymentService {

  mainUrl = serverIp + `/fbf-api/api/payment`;
  constructor(public http: Http) {}

  getMemberPaymentByMemberId(memberId: number): Observable<Payment[]> {
    return this.http.get(this.mainUrl + `/member/` + memberId)
      .map(this.extractData).catch(this.handleError);
  }

  addPayment(payment: Payment): Observable<Payment[]> {
    return this.http.post(this.mainUrl, payment)
      .map(this.extractData).catch(this.handleError);
  }

  rejectPayment(paymentId: number, paymentRequest: UIPaymentRequest): Observable<Payment[]> {
    
    return this.http.put(this.mainUrl + '/' + paymentId + '/reject', paymentRequest)
      .map(this.extractData).catch(this.handleError);
  }

  updatePayment(paymentId: number, payment: Payment): Observable<Payment[]> {
    return this.http.put(this.mainUrl + '/' + paymentId, payment)
      .map(this.extractData).catch(this.handleError);
  }

  approvePayment(paymentId: number, paymentRequest: UIPaymentRequest): Observable<Payment[]> {
    return this.http.put(this.mainUrl + '/' + paymentId + '/approve', paymentRequest)
      .map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }
  private handleError(error: Response | any) {
    return Observable.throw(error.status);
  }
}
