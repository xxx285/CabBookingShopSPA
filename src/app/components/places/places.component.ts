import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place';
import { PlaceCreate } from 'src/app/models/placeCreate';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: Place[] = []
  add: boolean = false
  newPlace: PlaceCreate = {
    placeName: ""
  }

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAll("places").subscribe(
      p => {
        this.places = p;
      }
    )
  }

  deletePlaceById(id: number) {
    this.apiService.deleteById("places", id).subscribe()
    location.reload()
  }

  addPlace() {
    this.apiService.create("places", this.newPlace).subscribe();
    location.reload()
  }

}
