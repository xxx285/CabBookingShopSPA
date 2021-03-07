import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CabType } from 'src/app/models/cabtype';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cabtype-edit',
  templateUrl: './cabtype-edit.component.html',
  styleUrls: ['./cabtype-edit.component.css']
})
export class CabtypeEditComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute,  private route: Router) { }

  type: CabType = {
    cabTypeId: 0,
    cabTypeName: ""
  }

  updatedType: CabType = {
    cabTypeName: "",
    cabTypeId: 0
  }

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"))
    this.apiService.getById("cab", id).subscribe(
      t => {
        this.type = t
      }
    )
    this.updatedType.cabTypeId = id
  }

  updateType() {
    this.apiService.update("cab", this.updatedType).subscribe();
    this.route.navigate(['cabtype']);
  }

}
