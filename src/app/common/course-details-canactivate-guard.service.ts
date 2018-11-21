import {
  Injectable
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {
  CourseHttpService
} from './course-http.service';
import {
    CourseService
  } from './course.service';
import {
  Observable,
  of
} from 'rxjs';
import {
  map, catchError
} from 'rxjs/operators';
import {
  Course
} from './course.interface';

@Injectable()
export class CourseDetailsActivateGuard implements CanActivate {
  constructor(private svcCourse: CourseHttpService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id: number = +route.params['id'];
    if (id === NaN) {
      return false;
    }

    return this.svcCourse.getCourse(+route.params['id']).pipe(
        map( data => {
            if (data) {
                return true;
            }
        }),
        catchError(e => {
            this.router.navigate(['/404']);
            return of(false);
        })
    );
}

}
