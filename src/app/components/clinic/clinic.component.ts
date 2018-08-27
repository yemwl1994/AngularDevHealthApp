import { Component, OnInit, TemplateRef} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { GendocinfoService } from '../../services/gendocinfo.service';
import { LoginService } from '../../services/login.service';
import { BookingService } from '../../services/booking.service';
//import { Gendoc } from '../../models/gendoc';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Booking } from '../../models/booking';
import * as $ from 'jquery';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  // pagination setup ...

  states: any[];
  doctorsInfo =  {};
  bgcustom: string = 'bg-custom';
  userId: number;
  bookInfo: Booking = {};
  bookingRefId?: string;
  modalRef: BsModalRef;

  constructor(private genInfo: GendocinfoService,
              private spinnerService: NgxSpinnerService,
              private loginService: LoginService,
              private bookingService: BookingService,
              private toastr: ToastrService,
              private router: Router,
              private modalService: BsModalService) { }

  ngOnInit() {

    this.genInfo.getStateList().subscribe(state => {
        this.states = state;
        state.forEach((extractState) =>{
          this.doctorsInfo[extractState.state] = [];
        });

    });
    
  }


  loadDocInfo(event:boolean,state: string){
    if(event && JSON.stringify(this.doctorsInfo[state]) === '[]') {
      this.genInfo.getDocList(state).subscribe( (docInfos) => {
        docInfos.forEach((docInfo) => {

          docInfo.longi = parseFloat(docInfo.longi);
          docInfo.lat = parseFloat(docInfo.lat);
          this.doctorsInfo[state].push(docInfo);
        });
      })
    }
  }

  onBooking(transportService: boolean, docId: number){

    let request = false;
    this.loginService.getUserInfo().subscribe(userInfo => {
 
      if(JSON.stringify(userInfo) == '{}'){
        this.toastr.warning('', 'Kindly Login before Proceed',{timeOut:4000, closeButton: true});
      }else{
        
        this.userId = userInfo.id;
        request = true;
      }
    });
    if(request){
      this.spinnerService.show();
      this.bookInfo['transportService'] = transportService;
      this.bookInfo['docId'] = docId;
      this.bookInfo['userId'] = this.userId;

      this.bookingService.submitBooking(this.bookInfo).subscribe((subStatus)=>{
        console.log(subStatus);
        if(subStatus.success == true){
            this.bookingRefId = subStatus.bookingRefId;
            this.bookInfo = {};
            console.log(this.bookingRefId);
            $('#hiddenModalButton').click();
            // trigger Modal
        }else{
          this.toastr.error('Try Again', 'Failed Confirmation',{timeOut: 4000, closeButton: true});
          this.bookInfo = {};
        }
        this.spinnerService.hide();
      });
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


   // after Confirm Modal Navigate to main page


  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  // }

  // confirm(): void {
  //   this.message = 'Confirmed!';
  //   // send log function here
  //   this.modalRef.hide();
  // }

  // decline(): void {
  //   this.message = 'Declined!';
  //   this.modalRef.hide();
  // }

  // onChoseLocation(event){
  //   console.log(event); // event.coords.lat event.coords.lng
  // }

  // clickedMarker(infowindow) {
  //   console.log(infowindow);
  // }

  // onBooking(checkbox){
  //   console.log(checkbox);
  // }

 
}
