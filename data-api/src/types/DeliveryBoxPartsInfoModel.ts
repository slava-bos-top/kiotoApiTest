import { DeliveryBoxType } from "./Enums";
import BaseModel from "./BaseModel";

export interface DeliveryBoxPartsInfoModel extends BaseModel {
    partID: string;
    deliveryBoxType: DeliveryBoxType;
    count: number;
}