import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Gendoc } from '../models/gendoc';
import { Booking } from '../models/booking';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
    'Accept': 'application/json'
    // 'Access-Control-Allow-Origin' : '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  urlContext = 'http://localhost:8888/accenture/healthcare/1.0.0';

  constructor(private http: HttpClient) { }

  submitBooking(booking: Booking){

    const urlContext = `${this.urlContext}/book`;

    return this.http.post<any>(urlContext, booking, httpOptions);
  }

}
