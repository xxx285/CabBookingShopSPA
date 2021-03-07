import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingDetail } from 'src/app/models/bookingDetail';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  bookingDetail!: BookingDetail;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var id: number = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.apiService.getById("bookings" , id).subscribe(
      h => {
        this.bookingDetail = h
        this.bookingDetail.bookingDate = this.bookingDetail.bookingDate.substring(0,10)
        this.bookingDetail.pickupDate = this.bookingDetail.pickupDate.substring(0,10)
      }
    )
  }

}
