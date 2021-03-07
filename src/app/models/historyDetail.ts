import { CabType } from "./cabtype";
import { Place } from "./place";

export interface HistoryDetail {
    id: number;
    email: string;
    bookingDate: string;
    bookingTime: string;
    fromPlaceId: number;
    toPlaceId: number;
    pickUpAddress: string;
    landmark: string;
    pickupDate: string;
    pickupTime: string;
    cabTypeId: number;
    contactNo: string;
    status: string;
    compTime: string;
    charge: number;
    feedback: string;
    toPlace: Place;
    fromPlace: Place;
    cabType: CabType;
  }