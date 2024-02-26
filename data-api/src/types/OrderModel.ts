
import BaseModel from './BaseModel';
import {OrderPartStatus} from './Enums';

export interface OrderModel extends BaseModel {
    dueDate: Date;
    // Status can be only one of value 'Active', 'Cancelled', 'Completed'
    status: OrderPartStatus;
}
