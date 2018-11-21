import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dCode: string;
  dStartDate: string;
  dEndDate: string;
  constructor() { }

  ngOnInit() {
    this.dCode = '12345A';
    this.dStartDate = '2018-11-11';
    this.dEndDate = '2018-12-12';
  }

}
