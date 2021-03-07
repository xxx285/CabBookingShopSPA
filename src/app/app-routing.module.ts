import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingCompleteComponent } from './components/booking-complete/booking-complete.component';
import { BookingCreateComponent } from './components/booking-create/booking-create.component';
import { BookingDetailComponent } from './components/booking-detail/booking-detail.component';
import { BookingEditComponent } from './components/booking-edit/booking-edit.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { CabtypeEditComponent } from './components/cabtype-edit/cabtype-edit.component';
import { CabtypeListComponent } from './components/cabtype-list/cabtype-list.component';
import { HistoryCreateComponent } from './components/history-create/history-create.component';
import { HistoryDetailComponent } from './components/history-detail/history-detail.component';
import { HistoryEditComponent } from './components/history-edit/history-edit.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlaceEditComponent } from './components/place-edit/place-edit.component';
import { PlacesComponent } from './components/places/places.component';

const routes: Routes = [
  {path: "", component: BookingListComponent}, // need to be changed
  {path: "places", component: PlacesComponent},
  {path: "places/edit/:id", component: PlaceEditComponent},
  {path: "cabtype", component: CabtypeListComponent},
  {path: "cabtype/edit/:id", component: CabtypeEditComponent},
  {path: "booking", component: BookingListComponent},
  {path: "booking/create", component: BookingCreateComponent},
  {path: "booking/:id", component: BookingDetailComponent},
  {path: "booking/edit/:id", component: BookingEditComponent},
  {path: "booking/complete/:id", component: BookingCompleteComponent},
  {path: "history", component: HistoryListComponent},
  {path: "history/create", component: HistoryCreateComponent},
  {path: "history/:id", component: HistoryDetailComponent},
  {path: "history/edit/:id", component: HistoryEditComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
