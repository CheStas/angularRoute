import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppTimerComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { TimerComponent } from './timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { DisplayComponent } from './display/display.component';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppTimerComponent,
    TimeComponent,
    TimerComponent,
    StopwatchComponent,
    DisplayComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [ AppService ],
  bootstrap: [AppTimerComponent]
})
export class AppTimerModule { }
