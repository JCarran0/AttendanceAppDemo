import { StudentSupportService } from './services/student-support.service';
import { AttendanceService } from './services/attendance.service';
import { SupportsService } from './services/supports.service';
import { AppRoutingModule } from './app-router/app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { SupportListComponent } from './components/support-list/support-list.component';
import { SupportDetailsComponent } from './components/support-details/support-details.component';
import { AttendanceInputComponent } from './components/attendance-input/attendance-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SupportListComponent,
    SupportDetailsComponent,
    AttendanceInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [
    SupportsService,
    AttendanceService,
    StudentSupportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
