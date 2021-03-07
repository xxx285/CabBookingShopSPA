import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CabType } from 'src/app/models/cabtype';
import { CabTypeCreate } from 'src/app/models/cabtypeCreate';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cabtype-list',
  templateUrl: './cabtype-list.component.html',
  styleUrls: ['./cabtype-list.component.css']
})
export class CabtypeListComponent implements OnInit {

  cabtype: CabType[] = []
  add: boolean = false
  newCabType: CabTypeCreate = {
    cabTypeName: ""
  }

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAll("cab").subscribe(
      c => {
        this.cabtype = c;
      }
    )
  }

  deleteTypeById(id: number) {
    this.apiService.deleteById("cab", id).subscribe()
    location.reload()
  }

  addType() {
    this.apiService.create("cab", this.newCabType).subscribe();
    location.reload()
  }

}
