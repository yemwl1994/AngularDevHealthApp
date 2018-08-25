import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from '../../models/login';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Userinfo } from '../../models/userinfo';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    username: '',
    password: ''
  };
  infoPass: boolean;
  
  @ViewChild('loginForm') form: any;

  constructor(private toastr: ToastrService,
              private loginService: LoginService,
              private router: Router,
              private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.infoPass = true;
    //this.toastr.success('Hello world!', 'Toastr fun!');
  }

  onSubmit({value, valid}: {value: Login, valid: boolean}) {
    this.infoPass = true;
    if(!valid) {
      console.log('Invalid Form')
      this.form.reset();

    } else {

          this.spinnerService.show();
          this.loginService.submitLog(value).subscribe(
            userlogininfo => {
 
              if (userlogininfo.error) {
                this.infoPass = false;
                this.spinnerService.hide();
                //this.toastr.error('Incorrect Login Info', 'Login Failed');
              }
              else if(userlogininfo.username && userlogininfo.address) {
                this.loginService.setUserInfo(userlogininfo);
                this.form.reset();
                this.spinnerService.hide();
                this.router.navigate(['/']);

              }
              else {
                this.spinnerService.hide();
                this.toastr.error('Unable to Login, Kindly Retry', 'Login Failed',{timeOut:3000, closeButton: true});
                this.form.reset();
              }
            }
          )
    }

    this.form.reset();

  }


}
