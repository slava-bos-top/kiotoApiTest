
import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import FilamentBrandEntity from "../entites/filamentBrandEntity";
import { BaseFunction } from "../services/baseFunction";
import { FilamentBrandModel } from "../types/FilamentBrandModel";

export async function FilamentBrand(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new FilamentBrandEntity();
    const { body, status } = await BaseFunction<FilamentBrandModel>(entity, request);
    return { body, status };
};

app.http('FilamentBrand', {
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    authLevel: 'anonymous',
    handler: FilamentBrand
});
