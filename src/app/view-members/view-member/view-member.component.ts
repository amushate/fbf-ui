import {Dependant} from '../../fbf-ui-model/dependant';
import {Member} from '../../fbf-ui-model/member';
import {Payment} from '../../fbf-ui-model/payment';
import {UIPaymentRequest} from '../../fbf-ui-model/paymentrequest';
import {ApiService} from '../../shared/api.service';
import {DependantService} from '../../shared/dependant.service';
import {PaymentService} from '../../shared/payment.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {error} from 'util';
import {Location} from '@angular/common';

enum PaymentStatus {
  APPROVED,
  REJECTED,
  PENDING_VERIFICATION
}

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
  payments: Payment[];
  newDependant = new Dependant();
  public modalRef: BsModalRef;
  totalPayments: number;
  paymentStatus: typeof PaymentStatus = PaymentStatus;
  constructor(private service: ApiService, private router: Router, private route: ActivatedRoute,
    private dependantService: DependantService, private modalService: BsModalService
    , private paymentService: PaymentService, private location: Location) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.service.getMember(this.id).subscribe(data => {
        this.member$ = data;
      }, error => {alert('Error Occured!');}
      );
    });
  }

  loadDependants() {
    this.service.getMemberDependants(this.member$.fbfMemberId).subscribe(data => {
      this.dependants = data;
    }, error => {alert('Error Occured!');}
    );
  }

  loadPayments() {
    this.paymentService.getMemberPaymentByMemberId(this.member$.fbfMemberId).subscribe(data => {
      this.payments = data;
      let sum = 0;
      this.payments.forEach(payment => {
        sum = sum + payment.amount;
      });
      this.totalPayments = sum;
    }, error => {
      alert('error getting payments');
    });
  }

  reject(payment: Payment) {
    const paymentRequest = new UIPaymentRequest();
    paymentRequest.rejectedBy = "amushate";
    paymentRequest.rejectionReason = "DUPLICATE";
    this.paymentService.rejectPayment(payment.paymentId, paymentRequest).subscribe(data => {
      alert('Payment Rejection successiful.');
      this.loadPayments();
    }, error => {
      alert(error);
    });
  }

  approve(payment) {
    const paymentRequest = new UIPaymentRequest();
    paymentRequest.approvedBy = "amushate";
    this.paymentService.approvePayment(payment.paymentId, paymentRequest).subscribe(data => {
      alert('Payment Approval successiful.');
      this.loadPayments();
    }, error => {
      alert(error);
    });
  }

  back() {
    this.location.back();
  }

}
