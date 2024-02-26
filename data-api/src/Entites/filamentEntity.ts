import {FilamentModel} from "../types/FilamentModel";
import BaseEntity from "./baseEntity";

export default class FilamentEntity extends BaseEntity<FilamentModel> {
    constructor() {
        super("filaments");
    }
}