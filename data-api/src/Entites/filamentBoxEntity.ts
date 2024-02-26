import {FilamentBoxModel} from "../types/FilamentBoxModel";
import BaseEntity from "./baseEntity";

export default class DeliveryBoxPartsInfoEntity extends BaseEntity<FilamentBoxModel> {
    constructor() {
        super("FilamentBox");
    }
}