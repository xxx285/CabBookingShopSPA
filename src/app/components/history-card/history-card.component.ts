import { Component, Input, OnInit } from '@angular/core';
import { HistoryCard } from 'src/app/models/historyCard';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent implements OnInit {

  @Input()
  historyCard!: HistoryCard

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.historyCard.bookingDate = this.historyCard.bookingDate?.substring(0,10);
  }

  deleteHistoryById(id: number) {
    this.apiService.deleteById("bookinghistory", id).subscribe()
    location.reload()
  } 
}
