import BaseModel from "./BaseModel";

export default interface PartModel extends BaseModel {
    title: string;
    itemID: string;
    stlUrl: string;
    weight: string;
}