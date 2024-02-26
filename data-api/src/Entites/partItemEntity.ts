import {PartItemModel} from "../types/PartItemModel";
import BaseEntity from "./baseEntity";

export default class PartItemEntity extends BaseEntity<PartItemModel> {
    constructor() {
        super("PartItem");
    }
}