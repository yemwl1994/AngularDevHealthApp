import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    const spinnerService = this.spinnerService;

    spinnerService.show();

    setTimeout(()=> {
      spinnerService.hide();
    }, 3000);
  }

}
