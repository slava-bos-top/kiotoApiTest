import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import PartEntity from "../entites/partEntity";
import { BaseFunction } from "../services/baseFunction";
import PartModel from "../types/PartModel";

export async function Part(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new PartEntity();
    const { body, status } = await BaseFunction<PartModel>(entity, request);
    return { body, status };
};

app.http('Part', {
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    authLevel: 'anonymous',
    handler: Part
});
