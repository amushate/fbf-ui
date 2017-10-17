import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CarouselModule, TabsModule, BsDatepickerModule} from 'ngx-bootstrap';
import {SharedModule} from './shared/shared.module';
import {ModalModule} from 'ngx-bootstrap';
import {Ng2Webstorage} from 'ngx-webstorage';

import {AppComponent} from './app.component';
import {FbfNavBarComponent} from './fbf-nav-bar/fbf-nav-bar.component';
import {HomeComponent} from './home/home.component';
import {ViewMembersComponent} from './view-members/view-members.component';
import {RouterModule} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {CareersComponent} from './careers/careers.component';
import {FooterComponent} from './footer/footer.component';
import {ActiveMembersComponent} from './view-members/active-members/active-members.component';
import {AllMembersComponent} from './view-members/all-members/all-members.component';
import {ViewMemberComponent} from './view-members/view-member/view-member.component';
import {AllDependantsComponent} from './view-members/all-dependants/all-dependants.component';
import {FbfLifeComponent} from './fbf-life/fbf-life.component';
import {AddBoardMemberComponent} from './about-us/add-board-member/add-board-member.component';
import {LoginComponent} from './fbf-nav-bar/login/login.component';
import {OnlyLoggedInUsersGuard} from './fbf-nav-bar/check-loggin-status';
import {AddMemberComponent} from './view-members/add-member/add-member.component';


@NgModule({
  declarations: [
    AppComponent,
    FbfNavBarComponent,
    HomeComponent,
    ViewMembersComponent,
    AboutUsComponent,
    ContactUsComponent,
    CareersComponent,
    FooterComponent,
    ActiveMembersComponent,
    AllMembersComponent,
    ViewMemberComponent,
    AllDependantsComponent,
    FbfLifeComponent,
    AddBoardMemberComponent,
    LoginComponent,
    AddMemberComponent,
  ],
  imports: [
    BrowserModule, Ng2Webstorage, BsDatepickerModule.forRoot(),
    FormsModule, ReactiveFormsModule, ModalModule.forRoot(),
    HttpModule, CarouselModule.forRoot(), TabsModule.forRoot(), RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'careers', component: CareersComponent},
      {path: 'members', component: ViewMembersComponent, canActivate: [OnlyLoggedInUsersGuard]},
      {path: 'view-member/:id', component: ViewMemberComponent, canActivate: [OnlyLoggedInUsersGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'add-member', component: AddMemberComponent},]), SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
