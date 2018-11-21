import { Component, OnInit } from '@angular/core';
import { CourseService } from '../common/course.service';
import { Course } from '../common/course.interface';
import { ActivatedRoute } from '@angular/router';
import { CourseHttpService } from '../common/course-http.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor(private svcCourse: CourseHttpService, private route: ActivatedRoute) { }

  ngOnInit() {
      // const id = this.route.snapshot.params['id'];
      // this.svcCourse.getCourse(id).subscribe(d => this.course = d);
      this.route.data.subscribe(d => this.course = d['course']);
    }

}
