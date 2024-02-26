import BaseModel from "./BaseModel";
import { FilamentType } from "./Enums";

export interface PrintRequirementModel extends BaseModel {
    partID: string;
    filamentType: FilamentType;
    requirementsUrl: string;
}