import { Component, OnInit } from '@angular/core';
import { CourseService } from '../common/course.service';
import { Course } from '../common/course.interface';
import { CourseHttpService } from '../common/course-http.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  constructor(private svcCourse: CourseHttpService) { }

  ngOnInit() {
    // this.courses = this.svcCourse.getAllCourses();
    this.svcCourse.getAllCourses().subscribe(data => this.courses = data);
  }

}
