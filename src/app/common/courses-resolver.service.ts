import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Course } from './course.interface';
import { Observable } from 'rxjs';
import { CourseHttpService } from './course-http.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolverService implements Resolve<Course[]> {

  constructor(private svcCourse: CourseHttpService) {}

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]> {
    return this.svcCourse.getAllCourses();
  }
}
