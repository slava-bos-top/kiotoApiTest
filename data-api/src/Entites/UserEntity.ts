import {UserModel} from "../types/UserModel";
import BaseEntity from "./baseEntity";

export default class UserEntity extends BaseEntity<UserModel> {
    constructor() {
        super("User");
    }
}