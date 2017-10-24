import {ContactMessage} from '../fbf-ui-model/contact.message';
import { NotificationDialogComponent } from '../notifications/notification-dialog/notification-dialog.component';
import {ContactUsService} from '../shared/contact-us.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactMessage: ContactMessage;
  constructor(private contactUsService: ContactUsService) {
    this.contactMessage = new ContactMessage();
  }

  ngOnInit() {
  }

  save() {
    this.contactUsService.sendData(this.contactMessage).subscribe(data => {
      if (data) {
        alert('message sent reference =' + data.contactUsMessageId);
      }else {
        alert('error sending message.');
      }
    });
  }

  clear() {
    this.contactMessage = new ContactMessage();
  }

}
