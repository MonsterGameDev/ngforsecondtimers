import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit() {}

  increase() {
    this.count = this.count + 1;
  }

  decrease() {
    this.count = this.count - 1;
  }

  reset() {
    this.count = 0;
  }
}
