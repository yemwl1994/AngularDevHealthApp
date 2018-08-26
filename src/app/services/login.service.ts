import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
import { Userinfo } from '../models/userinfo';
import { BehaviorSubject, Observable, of} from 'rxjs';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
    'Accept': 'application/json'
    // 'Access-Control-Allow-Origin' : '*'
  })
};

@Injectable(
 // {providedIn: 'root'}
)
export class LoginService {
  log: Login;
  userinfo: Userinfo;
  userInfo = new BehaviorSubject<Userinfo>({});
  currentUser = this.userInfo.asObservable();

  constructor(private http: HttpClient) { }

  urlContext = 'http://localhost:8888/accenture/healthcare/1.0.0';

  submitLog(log: Login) {
    const urlContext = this.urlContext + '/user';
    return this.http.post<Userinfo>(urlContext, log, httpOptions);
  }

  setUserInfo(user: Userinfo) {
    this.userInfo.next(user);
  }

  logOutUser() {
    this.userInfo.next({});
  }

  getUserInfo(){
    return this.currentUser;
  }

}
