import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OnlyForLoggedInGuard } from './guards/only-for-logged-in.guard';
import { OnlyForUnauthGuard } from './guards/only-for-unauth.guard';
import { ShowPassGuard } from './guards/show-pass.guard';
import { AuthService } from './service/auth.service';
import { ForgotPassService } from './service/forgot-pass.service';
import { UsersService } from './service/users.service';
import { FormsModule } from '@angular/forms';
import { ShowPassComponent } from './components/show-pass/show-pass.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { AppTimerModule } from '../timer/app.module';
import { SortByPipe } from './pipes/sort-by-seq.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPassComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ShowPassComponent,
    HeaderComponent,
    ProfileComponent,
    UsersComponent,
    SortByPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppTimerModule
  ],
  providers: [ AuthService, ForgotPassService, UsersService, OnlyForLoggedInGuard, OnlyForUnauthGuard, ShowPassGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
