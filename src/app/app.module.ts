import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseService } from './common/course.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CourseHttpService } from './common/course-http.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseCardComponent,
    NavbarComponent,
    CourseDetailsComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    CourseHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
