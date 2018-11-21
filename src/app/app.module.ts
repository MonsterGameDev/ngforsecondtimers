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
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
// import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { CoursesResolverService } from './common/courses-resolver.service';
import { CourseDetailsResolverService } from './common/course-details-resolver.service';
import { CourseDetailsActivateGuard } from './common/course-details-canactivate-guard.service';
import { UserFormGuard } from './users/user-form/user-form-candeactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseCardComponent,
    NavbarComponent,
    CourseDetailsComponent,
    RxjsComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    CourseHttpService,
    CoursesResolverService,
    CourseDetailsResolverService,
    CourseDetailsActivateGuard,
    UserFormGuard
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
