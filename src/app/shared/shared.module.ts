import {OnlyLoggedInUsersGuard} from '../fbf-nav-bar/check-loggin-status';
import {ApiService} from './api.service';
import {BoardMemberService} from './board-member.service';
import {DependantService} from './dependant.service';
import {ContactUsService} from './contact-us.service';
import {DocumentService} from './document.service';
import {LoginService} from './login.service';
import {PaymentService} from './payment.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    ApiService, DependantService, BoardMemberService, LoginService, OnlyLoggedInUsersGuard
    , ContactUsService, DocumentService, PaymentService,
  ]
})
export class SharedModule {}
