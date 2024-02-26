import { GetTableEntityOptions, UpdateEntityResponse } from "@azure/data-tables";

export interface IBaseEntity<T> {
    createTable(): Promise<void>;
    insert(entity: T): Promise<void>;
    get(id: string): Promise<T>;
    filterBy(options: GetTableEntityOptions): Promise<T[]>;
    getAll(): Promise<T[]>;
    update(entity: T): Promise<UpdateEntityResponse>;
    delete(id: string): Promise<void>;
}