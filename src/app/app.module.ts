import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesComponent } from './components/places/places.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/layout/header/header.component';
import { CabtypeListComponent } from './components/cabtype-list/cabtype-list.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlaceEditComponent } from './components/place-edit/place-edit.component';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { HistoryDetailComponent } from './components/history-detail/history-detail.component';
import { HistoryEditComponent } from './components/history-edit/history-edit.component';
import { HistoryCreateComponent } from './components/history-create/history-create.component';
import { CabtypeEditComponent } from './components/cabtype-edit/cabtype-edit.component';
import { BookingEditComponent } from './components/booking-edit/booking-edit.component';
import { BookingDetailComponent } from './components/booking-detail/booking-detail.component';
import { BookingCreateComponent } from './components/booking-create/booking-create.component';
import { BookingCardComponent } from './components/booking-card/booking-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    HeaderComponent,
    CabtypeListComponent,
    BookingListComponent,
    HistoryListComponent,
    NotFoundComponent,
    PlaceEditComponent,
    HistoryCardComponent,
    HistoryDetailComponent,
    HistoryEditComponent,
    HistoryCreateComponent,
    CabtypeEditComponent,
    BookingEditComponent,
    BookingDetailComponent,
    BookingCreateComponent,
    BookingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
