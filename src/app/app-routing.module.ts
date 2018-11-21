import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesResolverService } from './common/courses-resolver.service';
import { CourseDetailsResolverService } from './common/course-details-resolver.service';
import { CourseDetailsActivateGuard } from './common/course-details-canactivate-guard.service';

export const ROUTES = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CourseListComponent, resolve: {courses: CoursesResolverService} },
  { path: 'courses/:id',
    component: CourseDetailsComponent,
    resolve: { course: CourseDetailsResolverService},
    canActivate: [CourseDetailsActivateGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: '**', component: NotFoundComponent }
];

// courses/:id/sessions/:sessionId

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
