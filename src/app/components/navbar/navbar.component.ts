import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Userinfo } from '../../models/userinfo';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private alreadyLogin: boolean = false;
  private userInfo: Userinfo;

  constructor(private loginService : LoginService,
    private spinnerService: NgxSpinnerService,
    private router: Router) { }

  ngOnInit() {

    this.loginService.userInfo.subscribe(userInfo => {

      if(JSON.stringify(userInfo) === "{}"){
        this.alreadyLogin = false;
        this.userInfo = userInfo;
      }

      if(userInfo.username && userInfo.email){
        this.alreadyLogin = true;
        this.userInfo = userInfo;
      }
    });
  }

  logout() {
    this.spinnerService.show();
    console.log(this.userInfo);
    this.loginService.logOutUser();
    setTimeout(()=> {
      this.spinnerService.hide();
    },1500);
    this.router.navigate(['/']);
  }


}
