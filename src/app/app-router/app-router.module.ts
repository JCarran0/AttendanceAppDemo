import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: '**', component: AppComponent } // TODO: Replace with "404 Page not found"
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

