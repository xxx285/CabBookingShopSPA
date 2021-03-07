import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingCreate } from 'src/app/models/bookingCreate';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.css']
})
export class BookingCreateComponent implements OnInit {

  invalidLogin: boolean = false

  booking: BookingCreate = {
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
  }

  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
  }

  addBooking() {
    this.apiService.create("bookings", this.booking).subscribe(
      (response) => {
        if (response) {
          this.route.navigate(['booking']);
        } else {
          this.invalidLogin = true;
        }
      },
        (err: any) => { this.invalidLogin = true, console.log(err); }
    );
  }

}
