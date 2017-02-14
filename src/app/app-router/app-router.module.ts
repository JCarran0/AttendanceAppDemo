import { SupportDetailsComponent } from './../components/support-details/support-details.component';
import { SupportListComponent } from './../components/support-list/support-list.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: 'support-details', component: SupportDetailsComponent },
  { path: 'support-list', component: SupportListComponent },
  { path: '**', component: SupportListComponent } // TODO: Replace with "404 Page not found"
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

