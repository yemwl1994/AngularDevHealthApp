import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Gendoc } from '../models/gendoc';
import { of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GendocinfoService {

  // hardcode it first
   httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
      // 'Access-Control-Allow-Origin' : '*'
    })
  };

  constructor(private http: HttpClient) { }

  urlContext = 'http://localhost:8888/accenture/healthcare/1.0.0';

  getStateList(){
    const urlContext = `${this.urlContext}/states`;
    return this.http.get<any[]>(urlContext, this.httpOptions);
  }

  getDocList(state: string) {
    const urlContext = `${this.urlContext}/doc`;
    const setParams =  new HttpParams().set('state' , state);

    this.httpOptions['params'] = setParams;
    return this.http.get<Gendoc[]>(urlContext, this.httpOptions);
  }

  

}
