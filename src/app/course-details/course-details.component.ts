import { Component, OnInit } from '@angular/core';
import { CourseService } from '../common/course.service';
import { Course } from '../common/course.interface';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor(private svcCourse: CourseService) { }

  ngOnInit() {
      this.course = this.svcCourse.getCourse(2);
  }

}
