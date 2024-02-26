import {DeliveryBoxPartsInfoModel} from "../types/DeliveryBoxPartsInfoModel";
import BaseEntity from "./baseEntity";

export default class DeliveryBoxPartsInfoEntity extends BaseEntity<DeliveryBoxPartsInfoModel> {
    constructor() {
        super("DeliveryBoxPartsInfo");
    }
}