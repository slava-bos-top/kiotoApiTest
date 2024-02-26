import {
    app,
    HttpRequest,
    HttpResponseInit,
    InvocationContext
} from "@azure/functions";
import FilamentEntity from "../entites/filamentEntity";
import {FilamentModel} from "../types/FilamentModel";
import {BaseFunction} from "../services/baseFunction";

export async function Filament(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new FilamentEntity();
    try {
        const { body, status } = await BaseFunction<FilamentModel>(entity, request);
        return { body, status };
    } catch (err) {
        context.error(err);
        throw err;
    }
}

app.http('Filament', {
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    authLevel: 'anonymous',
    handler: Filament
});
