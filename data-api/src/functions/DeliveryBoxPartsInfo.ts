import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import DeliveryBoxPartsInfoEntity from "../entites/deliveryBoxPartsInfoEntity";
import { BaseFunction } from "../services/baseFunction";
import { DeliveryBoxPartsInfoModel } from "../types/DeliveryBoxPartsInfoModel";

export async function DeliveryBoxPartsInfo(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new DeliveryBoxPartsInfoEntity();
    const { body, status } = await BaseFunction<DeliveryBoxPartsInfoModel>(entity, request);
    return { body, status };
};

app.http('DeliveryBoxPartsInfo', {
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    authLevel: 'anonymous',
    handler: DeliveryBoxPartsInfo
});
