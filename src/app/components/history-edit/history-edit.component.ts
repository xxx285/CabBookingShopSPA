import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryUpdate } from 'src/app/models/historyUpdate';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history-edit',
  templateUrl: './history-edit.component.html',
  styleUrls: ['./history-edit.component.css']
})
export class HistoryEditComponent implements OnInit {

  history!: HistoryUpdate;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"))
    this.apiService.getById("bookinghistory", id).subscribe(
      o => {
        this.history = o
        this.history.pickupDate = this.history.pickupDate.substring(0,10)
        this.history.bookingDate = this.history.bookingDate.substring(0,10)
      }
    )
  }

  updateHistory() {
    this.apiService.update("bookinghistory", this.history).subscribe();
    this.router.navigate(['history']);
  }

}
