import { HttpRequest, } from "@azure/functions";

export interface BaseFunctionResponce {
    status: number;
    body: string;
}

export async function BaseFunction<T>(entity: any, request: HttpRequest): Promise<BaseFunctionResponce> {
    
    const id = request.query.get('id') || '';
    let body: string;
    let status: number = 200;
    switch (request.method) {
        case 'POST': {
            const bodyResponse: any = await request.text();
            const filament: T = JSON.parse(bodyResponse);
            await entity.insert(filament);
            body = JSON.stringify(filament);
            status = 201;
            break;
        }
        case 'GET': {
            try {
                if (request.params && id !== '') {
                    const data: T = await entity.get(id);
                    body = JSON.stringify(data);
                } else {
                    const data: Array<T> = await entity.getAll();
                    body = JSON.stringify(data);
                }
            } catch (error) {
                console.log("error", error);
                status = error.statusCode;
                body = JSON.stringify({});
            }
            break;
        }
        case 'DELETE': {
            await entity.delete(id);
            body = `Deleted ${id}`;
            break;
        }
        case 'PUT': {
            const data: any = await request.text();
            const item: T = JSON.parse(data);
            await entity.update(item);
            body = `Updated ${item['id']}`;
            break;
        }
    }
    return { body, status };
}
