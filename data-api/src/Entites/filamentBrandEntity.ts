import { TableUpdateEntityHeaders } from "@azure/data-tables";
import {FilamentBrandModel} from "../types/FilamentBrandModel";

import generateUUID from "../utils/generateUUID";
import { IBaseEntity } from "./IBaseEntity";
import BaseEntity from "./baseEntity";

export default class FilamentBrandEntity extends BaseEntity<FilamentBrandModel> {
    constructor() {
        super("FilamentBrand");
    }
}