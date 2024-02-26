import BaseModel from "./BaseModel";
import Part from "./PartModel";

export interface PartItemModel extends BaseModel {
    title: string;
    partID: string;
    part: Part;
}