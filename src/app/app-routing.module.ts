import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

export const ROUTES = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
