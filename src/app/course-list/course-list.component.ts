import { Component, OnInit } from '@angular/core';
import { CourseService } from '../common/course.service';
import { Course } from '../common/course.interface';
import { CourseHttpService } from '../common/course-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  constructor(private svcCourse: CourseHttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    // static call
    // this.courses = this.svcCourse.getAllCourses();

    // using HttpClient receiving an Observable
    // this.svcCourse.getAllCourses().subscribe(data => this.courses = data);

    // Using a route resolver - SNAPSHOT
    // this.courses = this.route.snapshot.data['courses'];

    // Using a route resolver - OBSERVABLE
    this.route.data.subscribe(d => this.courses = d['courses']);
  }

}
