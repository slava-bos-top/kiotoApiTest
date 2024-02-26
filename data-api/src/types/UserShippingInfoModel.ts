import BaseModel from "./BaseModel";

export default interface UserShippingInfoModel extends BaseModel {
    userID: string;
    apiKey: string;
    city: string;
    postOfficeID: string;
    lastName: string;
    firstName: string;
    phoneNumber: string;
}