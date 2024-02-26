import BaseModel from './BaseModel';
import { FilamentType } from './Enums';

export interface FilamentModel extends BaseModel {
    title: string;
    brandId: string;
    filamentType: FilamentType
}