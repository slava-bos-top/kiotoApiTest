import BaseModel from "./BaseModel";

export interface FilamentBoxModel extends BaseModel {
    filamentId: string;
    weight: number;
    lenght: number;
    price: number;
}