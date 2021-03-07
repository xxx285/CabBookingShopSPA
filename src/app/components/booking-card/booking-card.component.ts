import { Component, Input, OnInit } from '@angular/core';
import { BookingCard } from 'src/app/models/bookingCard';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit {

  @Input()
  bookingCard!: BookingCard;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.bookingCard.pickupDate = this.bookingCard.pickupDate.substring(0, 10)
    this.bookingCard.bookingDate = this.bookingCard.bookingDate.substring(0, 10)
  }

  deleteBookingById(id: number) {
    this.apiService.deleteById("bookings", id).subscribe()
    location.reload()
  } 

}
