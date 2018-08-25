import { Component, OnInit, ViewChild } from '@angular/core';
import { Signup } from '../../models/signup';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  buttonDisabled: boolean = false;
  signUp: Signup;
  userNameExist: string;

  genders = [
    {gender : 'Male', value : 'Male', checked: true},
    {gender : 'Female', value : 'Female', checked: false}
  ];

  @ViewChild('signUpForm') form: any;


  constructor(private signUpService: SignupService,
              private spinnerService: NgxSpinnerService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.signUp = {
      username: '',
      password: '',
      email: '',
      gender: '',
      address: '',
      postcode : '',
      country: '',
      state: ''
    };



  }

  onSignUp({value, valid}: {value: Signup, valid: boolean}) {

    this.startState();

    this.signUpService.submitSignUp(value).subscribe(
      retrieveStatus => {
        console.log(value);
        
        if (retrieveStatus.success) {
          this.form.reset();
          this.userNameExist = '';
          this.endState();
          this.toastr.success('Congratz!', 'Success Registration', {timeOut:3000, closeButton: true});
          this.router.navigate(['/']);

        }
        else if (retrieveStatus.error == "Username Exist") {

          this.userNameExist = this.signUp.username;
          console.log(this.userNameExist);
          this.signUp.username = '';
          this.endState();
        }
        else {
          this.toastr.error('Incorrect Sign Up Info', 'Sign Up Failed');
          this.userNameExist = '';
          this.endState();
          this.form.reset();
        }

      }
    );
  }

  startState() {

    this.spinnerService.show();
    this.buttonDisabled = true;
  }

  endState() {
    this.buttonDisabled = false;
    this.spinnerService.hide();

  }

}
