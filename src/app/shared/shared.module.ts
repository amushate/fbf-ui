import {OnlyLoggedInUsersGuard} from '../fbf-nav-bar/check-loggin-status';
import {ApiService} from './api.service';
import {BoardMemberService} from './board-member.service';
import {DependantService} from './dependant.service';
import {LoginService} from './login.service';
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
  ]
})
export class SharedModule {}
