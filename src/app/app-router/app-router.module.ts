import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';
import { AttendanceInputComponent } from './../components/attendance-input/attendance-input.component';
import { SupportDetailsComponent } from './../components/support-details/support-details.component';
import { SupportListComponent } from './../components/support-list/support-list.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: 'attendance-input', component: AttendanceInputComponent },
  { path: 'support-details', component: SupportDetailsComponent },
  { path: 'support-list', component: SupportListComponent },
  { path: '', redirectTo: '/support-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


/**
 *By re-exporting the RouterModule, our feature module will be provided with the
 * Router Directives when using our Routing Module.
 * (from https://angular.io/docs/ts/latest/guide/router.html)
 */
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

