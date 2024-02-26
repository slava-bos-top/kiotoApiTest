import { GetTableEntityOptions } from '@azure/data-tables';
import { QueryParams } from '../types/QueryParams';

export const queryBuilder = (query: URLSearchParams): GetTableEntityOptions  => {
    const queryOptions: GetTableEntityOptions = {};
    if (query.get('filter')) {
        queryOptions.queryOptions.filter = query.get('filter');
    }
    if (query.get('columns')) {
        queryOptions.queryOptions.select = query.get('columns') as unknown as string[];
    }
    return queryOptions;
};

export const convertToQuery = (query: string): QueryParams => {
    const queryParams: QueryParams = {};
    if (query) {
        const queryParts = query.split('&');
        queryParts.forEach((part) => {
            const [key, value] = part.split('=');
            queryParams[key] = value;
        });
    }
    return queryParams;
};