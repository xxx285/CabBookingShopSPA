import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingUpdate } from 'src/app/models/bookingUpdate';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {

  booking!: BookingUpdate;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"))
    this.apiService.getById("bookings", id).subscribe(
      o => {
        this.booking = o
        this.booking.pickupDate = this.booking.pickupDate.substring(0,10)
        this.booking.bookingDate = this.booking.bookingDate.substring(0,10)
      }
    )
  }

  updateBooking() {
    this.apiService.update("bookings", this.booking).subscribe();
    this.router.navigate(['booking']);
  }

}
