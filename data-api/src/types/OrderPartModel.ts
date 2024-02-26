import BaseModel from "./BaseModel";
import Part from "./PartModel";

export interface OrderPartModel extends BaseModel {
    orderID: string;
    partID: string;
    part: Part;
    count: number;
    priority: number;
}