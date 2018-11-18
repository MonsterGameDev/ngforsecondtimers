import { Component, OnInit } from '@angular/core';
import { CourseService } from '../common/course.service';
import { Course } from '../common/course.interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  constructor(private svcCourse: CourseService) { }

  ngOnInit() {
    this.courses = this.svcCourse.getAllCourses();
  }

}
