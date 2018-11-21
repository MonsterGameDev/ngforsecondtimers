import { Injectable } from '@angular/core';
import { CourseHttpService } from './course-http.service';
import { ActivatedRoute, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, RouterState } from '@angular/router';
import { Course } from './course.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsResolverService implements Resolve<Course> {

  constructor (private svcCourse: CourseHttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    const id = +route.params['id'];
    return this.svcCourse.getCourse(id);
  }

}
