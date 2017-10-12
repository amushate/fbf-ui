import { ApiService } from './api.service';
import { DependantService } from './dependant.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    ApiService, DependantService
  ]
})
export class SharedModule { }
