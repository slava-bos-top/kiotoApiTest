import {PrintRequirementModel} from "../types/PrintRequirementModel";
import BaseEntity from "./baseEntity";

export default class PrintRequiremenEntity extends BaseEntity<PrintRequirementModel> {
    constructor() {
        super("PrintRequiremen");
    }
}