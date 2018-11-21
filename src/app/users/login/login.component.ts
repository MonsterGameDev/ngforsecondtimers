import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageTitle = this.route.snapshot.data['pageTitle'];
    console.log(this.pageTitle);
  }

}
