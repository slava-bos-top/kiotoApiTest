import BaseModel from "./BaseModel";
import UserShippingInfo from "./UserShippingInfoModel";

export interface UserModel extends BaseModel {
    userShippingInfo: UserShippingInfo;
    name: string;
}