import { CabType } from "./cabtype";
import { Place } from "./place";

export interface BookingCard {
    id: number;
    fromPlaceId: number;
    bookingDate: string;
    toPlaceId: number;
    cabTypeId: number;
    pickupDate: string;
    status: string;
    toPlace: Place;
    fromPlace: Place;
    cabType: CabType;
  }