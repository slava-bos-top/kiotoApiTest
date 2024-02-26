import BaseModel from "./BaseModel";
import { DeliveryBoxType, OrderPartBookingStatus } from "./Enums";

export interface OrderPartBooking extends BaseModel {
    orderPartID: string;
    userID: string;
    deliveryBoxType: DeliveryBoxType;
    shippingNumber: string;
    orderPartBookingStatus: OrderPartBookingStatus;
    count: number;
}