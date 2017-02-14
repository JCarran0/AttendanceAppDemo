import { SupportsService } from './services/supports.service';
import { AppRoutingModule } from './app-router/app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SupportListComponent } from './components/support-list/support-list.component';
import { SupportDetailsComponent } from './components/support-details/support-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SupportListComponent,
    SupportDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    SupportsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
