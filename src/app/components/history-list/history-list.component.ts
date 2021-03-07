import { Component, OnInit } from '@angular/core';
import { HistoryCard } from 'src/app/models/historyCard';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {

  historyCards: HistoryCard[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAll("bookinghistory").subscribe(
      h => {
        this.historyCards = h
      }
    )
  }

}
