import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  id: number;
  idRx: number;

  code: string;
  sDate: string;
  eDate: string;

  qCode: string;
  qSDate: string;
  qEDate: string;

  isDirty: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Snapshot Value
    this.id = this.route.snapshot.params['id'];
    console.log ('User ID to edit: ', this.id);

    // Observable
    this.route.params.subscribe(
      p => this.idRx = p['id']
    );

    // Snapshot value optional Params
      this.code = this.route.snapshot.params['code'];
      this.sDate = this.route.snapshot.params['startDate'];
      this.eDate = this.route.snapshot.params['endDate'];

    // Snapshot value Query Params
      this.qCode = this.route.snapshot.queryParams['code'];
      this.qSDate = this.route.snapshot.queryParams['startDate'];
      this.qEDate = this.route.snapshot.queryParams['endDate'];

      this.isDirty = true;
  }

  moveAway() {
    this.isDirty = false;
  }

}
