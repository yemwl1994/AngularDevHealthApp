import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
