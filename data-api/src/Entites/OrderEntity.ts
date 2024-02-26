import BaseEntity from "./baseEntity";
import { OrderModel } from "../types/OrderModel"; 

export default class OrderEntity extends BaseEntity<OrderModel> {
    constructor() {
        super("Orders");
    }

    // implement other methods here
}