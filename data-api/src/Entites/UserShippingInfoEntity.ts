import UserShippingInfoModel from "../types/UserShippingInfoModel";
import BaseEntity from "./baseEntity";

export default class UserShippingInfoEntity extends BaseEntity<UserShippingInfoModel> {
    constructor() {
        super("UserShippingInfo");
    }
}