import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [LoginComponent, UserFormComponent, PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'user', component: UserFormComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [],
  exports: [UserFormComponent, LoginComponent]
})
export class UsersModule { }
