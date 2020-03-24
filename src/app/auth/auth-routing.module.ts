import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOpComponent } from './components/login-op/login-op.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MembersComponent } from './components/members/members.component';
import { AuthGuard } from '../auth.service';

const routes: Routes = [
  { path: 'loginop', component: LoginOpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard]},
  { path: 'reset-password', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
