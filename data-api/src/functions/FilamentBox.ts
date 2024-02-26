import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import FilamentBoxEntity from "../entites/filamentBoxEntity";
import {BaseFunction} from "../services/baseFunction";
import {FilamentBoxModel} from "../types/FilamentBoxModel";

export async function FilamentBox(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new FilamentBoxEntity();
    const { body, status } = await BaseFunction<FilamentBoxModel>(entity, request);
    return { body, status };
};

app.http('FilamentBox', {
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    authLevel: 'anonymous',
    handler: FilamentBox
});
