import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseHttpService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses');
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:3000/courses/${id}`);
  }


}
