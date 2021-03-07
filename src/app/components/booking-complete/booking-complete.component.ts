import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingUpdate } from 'src/app/models/bookingUpdate';
import { HistoryCreate } from 'src/app/models/historyCreate';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking-complete',
  templateUrl: './booking-complete.component.html',
  styleUrls: ['./booking-complete.component.css']
})
export class BookingCompleteComponent implements OnInit {

  invalidLogin: boolean = false

  booking!: BookingUpdate;

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

  constructor(private apiService: ApiService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"))
    this.apiService.getById("bookings", id).subscribe(
      o => {
        this.booking = o
        this.booking.pickupDate = this.booking.pickupDate.substring(0,10)
        this.booking.bookingDate = this.booking.bookingDate.substring(0,10)
        this.history.email = this.booking.email
        this.history.bookingDate = this.booking.bookingDate
        this.history.bookingTime = this.booking.bookingTime
        this.history.fromPlaceId = this.booking.fromPlaceId
        this.history.toPlaceId = this.booking.toPlaceId,
        this.history.pickUpAddress = this.booking.pickUpAddress,
        this.history.landmark = this.booking.landmark,
        this.history.pickupDate = this.booking.pickupDate,
        this.history.pickupTime = this.booking.pickupTime,
        this.history.cabTypeId = this.booking.cabTypeId,
        this.history.contactNo = this.booking.contactNo,
        this.history.status = "completed"
      }
    )
  }

  completeBooking() {
    this.apiService.create("bookinghistory", this.history).subscribe(
      (response) => {
        if (response) {
          this.apiService.deleteById("bookings", this.booking.id).subscribe()
          this.route.navigate(['booking']);
        } else {
          this.invalidLogin = true;
        }
      },
        (err: any) => { this.invalidLogin = true, console.log(err); }
    );
  }
}
