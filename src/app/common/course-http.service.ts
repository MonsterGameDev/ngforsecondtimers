import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.interface';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseHttpService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses'); // .pipe(delay(3000));
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:3000/courses/${id}`); // .pipe(delay(3000));
  }


}
