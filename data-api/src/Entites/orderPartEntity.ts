import {OrderPartModel} from "../types/OrderPartModel";
import BaseEntity from "./baseEntity";

export default class OrderPartEntity extends BaseEntity<OrderPartModel> {
    constructor() {
        super("OrderPart");
    }
}