import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/app/models/place';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute,  private route: Router) { }

  oldPlace: Place = {
    placeName: "",
    placeId: 0
  }

  updatedPlace: Place = {
    placeName: "",
    placeId: 0
  }

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"))
    this.apiService.getById("places", id).subscribe(
      p => {
        this.oldPlace = p
      }
    )
    this.updatedPlace.placeId = id
  }

  updatePlace() {
    this.apiService.update("places", this.updatedPlace).subscribe();
    this.route.navigate(['places']);
  }

}
