import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent  
	],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  exports: [NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
