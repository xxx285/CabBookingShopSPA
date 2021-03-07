import { Component, OnInit } from '@angular/core';
import { BookingCard } from 'src/app/models/bookingCard';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookingCards: BookingCard[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAll("bookings").subscribe(
      b => {
        this.bookingCards = b
      }
    )
  }

}
