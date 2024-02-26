import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import UserEntity from "../entites/UserEntity";
import { BaseFunction } from "../services/baseFunction";
import {UserModel} from "../types/UserModel";

export async function Users(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new UserEntity();
    const { body, status } = await BaseFunction<UserModel>(entity, request);
    return { body, status };
};

app.http('Users', {
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    authLevel: 'anonymous',
    handler: Users
});
