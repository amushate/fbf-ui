import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fbf-nav-bar',
  templateUrl: './fbf-nav-bar.component.html',
  styleUrls: ['./fbf-nav-bar.component.css']
})
export class FbfNavBarComponent implements OnInit {

  title = 'FBF';
  fbfServices = [`FBF Life`, `FBF Health`];
  constructor() { }

  ngOnInit() {
  }

}
