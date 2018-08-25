import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Signup } from '../models/signup';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
    'Accept': 'application/json'
    // 'Access-Control-Allow-Origin' : '*'
  })
};
@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  urlContext = 'http://localhost:8888/accenture/healthcare/1.0.0';

  submitSignUp(signUp: Signup) {
    const urlContext = this.urlContext + '/reg';
    return this.http.post<any>(urlContext, signUp, httpOptions);
  }
}
