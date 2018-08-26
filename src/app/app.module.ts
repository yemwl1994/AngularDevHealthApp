import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatDialogModule } from '@angular/material';

import { BsDatepickerModule, ModalModule, AccordionModule } from 'ngx-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
//import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { SignupComponent } from './components/signup/signup.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { SpecialistsComponent } from './components/specialists/specialists.component';


import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { GendocinfoService } from './services/gendocinfo.service';
import { BookingService } from './services/booking.service';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ClinicComponent,
    SpecialistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatRadioModule,
    MatDialogModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAphd0xPgJQFaw0rKunsxsj6Ik2YRXhpSs'
    })
    
  ],
  providers: [
    LoginService,
    SignupService,
    GendocinfoService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
