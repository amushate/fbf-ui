import {Member} from '../../../fbf-ui-model/member';
import {Payment} from '../../../fbf-ui-model/payment';
import {ApiService} from '../../../shared/api.service';
import {PaymentService} from '../../../shared/payment.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  member$: Member;
  id: number;

  payment: Payment;
  payments: Payment[];
  errorMessage: any;
  private sub: any;
  constructor(private paymentService: PaymentService, private location: Location
    , private router: Router, private route: ActivatedRoute, private memberService: ApiService) {}

  ngOnInit() {
    this.payment = new Payment();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.memberService.getMember(this.id).subscribe(data => {
        this.member$ = data;
      }, error => {alert('Error Occured!');}
      );
    });
  }

  clear() {
    this.payment = new Payment();
    this.cancel();
  }

  save() {
    this.payment.fbfmemberId = this.member$.fbfMemberId;
    this.paymentService.addPayment(this.payment)
      .subscribe(payments => {
        alert('Payment Saved Successifully');
        this.reset();
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage.ok == false) {
          alert('Error saving payment, contact admin.');
        }
      });
  }

  private reset() {
    this.payment = new Payment();
    this.cancel();
  }

  cancel() {
    this.location.back();
  }

}
