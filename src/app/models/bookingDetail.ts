import { CabType } from "./cabtype";
import { Place } from "./place";

export interface BookingDetail {
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
    toPlace: Place;
    fromPlace: Place;
    cabType: CabType;
  }