import { StudentSupportService } from './services/student-support.service';
import { AttendanceService } from './services/attendance.service';
import { SupportsService } from './services/supports.service';
import { AppRoutingModule } from './app-router/app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { SupportListComponent } from './components/support-list/support-list.component';
import { SupportDetailsComponent } from './components/support-details/support-details.component';
import { AttendanceInputComponent } from './components/attendance-input/attendance-input.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SecondaryNavComponent } from './components/secondary-nav/secondary-nav.component';

const firebaseConfig = {
  apiKey: 'AIzaSyALZL5S6HefzSeObyc6Mc5-iCnTKtSwSNo',
  authDomain: 'attendance-app-demo.firebaseapp.com',
  databaseURL: 'https://attendance-app-demo.firebaseio.com',
  storageBucket: 'attendance-app-demo.appspot.com',
  messagingSenderId: '54223477000'
};


@NgModule({
  declarations: [
    AppComponent,
    SupportListComponent,
    SupportDetailsComponent,
    AttendanceInputComponent,
    PageNotFoundComponent,
    SecondaryNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    SupportsService,
    AttendanceService,
    StudentSupportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
