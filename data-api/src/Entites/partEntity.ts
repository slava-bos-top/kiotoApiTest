import PartModel from "../types/PartModel";
import BaseEntity from "./baseEntity";

export default class PartEntity extends BaseEntity<PartModel> {
    constructor() {
        super("Part");
    }
}