import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import UserShippingInfoEntity from "../entites/UserShippingInfoEntity";
import { BaseFunction } from "../services/baseFunction";
import UserShippingInfoModel from "../types/UserShippingInfoModel";

export async function UserShippingInfo(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new UserShippingInfoEntity();
    const { body, status } = await BaseFunction<UserShippingInfoModel>(entity, request);
    return { body, status };
};

app.http('UserShippingInfo', {
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    authLevel: 'anonymous',
    handler: UserShippingInfo
});
