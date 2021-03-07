import { CabType } from "./cabtype";
import { Place } from "./place";

export interface HistoryCard {
    id: number;
    fromPlaceId: number;
    bookingDate?: string;
    toPlaceId: number;
    cabTypeId: number;
    compTime?: string;
    toPlace: Place;
    fromPlace: Place;
    cabType: CabType;
  }