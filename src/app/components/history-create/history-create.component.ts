import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryCreate } from 'src/app/models/historyCreate';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history-create',
  templateUrl: './history-create.component.html',
  styleUrls: ['./history-create.component.css']
})
export class HistoryCreateComponent implements OnInit {

  invalidLogin: boolean = false
  
  history: HistoryCreate = {
    email: "",
    bookingDate: "",
    bookingTime: "",
    fromPlaceId: 0,
    toPlaceId: 0,
    pickUpAddress: "",
    landmark: "",
    pickupDate: "",
    pickupTime: "",
    cabTypeId: 0,
    contactNo: "",
    status: "",
    compTime: "",
    charge: 0,
    feedback: "",
  }

  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {

  }

  addHistory() {
    this.apiService.create("bookinghistory", this.history).subscribe(
      (response) => {
        if (response) {
          // console.log(' this is returnURL: ' + this.returnUrl);
          this.route.navigate(['history']);
        } else {
          this.invalidLogin = true;
        }
      },
        (err: any) => { this.invalidLogin = true, console.log(err); }
    );
  }

}
