import {Payment} from '../../../fbf-ui-model/payment';
import {PaymentService} from '../../../shared/payment.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  payment: Payment;
  payments: Payment[];
  errorMessage: any;
  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.payment = new Payment();
  }

  clear() {
    this.payment = new Payment();
  }

  save() {
    this.paymentService.addPayment(this.payment)
      .subscribe(payments => {
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
  }

}
