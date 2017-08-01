import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShowPassComponent } from './components/show-pass/show-pass.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';

import { OnlyForLoggedInGuard } from './guards/only-for-logged-in.guard';
import { OnlyForUnauthGuard } from './guards/only-for-unauth.guard';
import { ShowPassGuard } from './guards/show-pass.guard';

import { AppTimerComponent } from '../timer/app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main'
  }, {
    path: 'login',
    component: LoginComponent,
    canActivate: [OnlyForUnauthGuard]
  }, {
    path: 'register',
    component: RegisterComponent,
    canActivate: [OnlyForUnauthGuard]
  }, {
    path: 'forgot-pass',
    component: ForgotPassComponent,
    canActivate: [OnlyForUnauthGuard],
    canActivateChild: [ShowPassGuard],
    children: [{
      path: 'show',
      component: ShowPassComponent
    }]
  }, {
    path: 'main',
    component: DashboardComponent,
    canActivate: [OnlyForLoggedInGuard],
    children: [
      {
        path: '',
        component: HeaderComponent,
        children: [
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'timer',
            component: AppTimerComponent
          },
          {
            path: 'users',
            component: UsersComponent
          }
        ]
      }
    ]
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
