import { Dependant } from '../../fbf-ui-model/dependant';
import { DependantService } from '../../shared/dependant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-dependants',
  templateUrl: './all-dependants.component.html',
  styleUrls: ['./all-dependants.component.css']
})
export class AllDependantsComponent implements OnInit {
  alldependants: Dependant[];
  constructor(public dependantsService: DependantService) { }

  ngOnInit() {
    this.getDependants();
  }

  getDependants() {
    this.dependantsService.getMemberDependants().subscribe(data => {
      this.alldependants = data;
    });
  }

}
