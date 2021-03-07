export interface HistoryCreate {
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
  }