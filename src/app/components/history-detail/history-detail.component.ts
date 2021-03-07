import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryDetail } from 'src/app/models/historyDetail';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})
export class HistoryDetailComponent implements OnInit {

  historyDetail!: HistoryDetail;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var id: number = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.apiService.getById("bookinghistory" , id).subscribe(
      h => {
        this.historyDetail = h
        this.historyDetail.bookingDate = this.historyDetail.bookingDate.substring(0,10)
        this.historyDetail.pickupDate = this.historyDetail.pickupDate.substring(0,10)
      }
    )
  }

}
