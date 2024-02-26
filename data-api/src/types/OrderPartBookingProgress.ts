import BaseModel from "./BaseModel";
import { OrderPartBookingStatus } from "./Enums";

export interface OrderPartBookingProgress extends BaseModel {
    count: number;
    orderPartBookingID: string;
    orderPartBooking: OrderPartBookingStatus;
}