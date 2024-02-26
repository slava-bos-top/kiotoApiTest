import { 
    app, 
    HttpRequest, 
    HttpResponseInit, 
    InvocationContext 
} from "@azure/functions";
import OrderEntity from "../entites/OrderEntity";
import { OrderModel } from "../types/OrderModel";
import { BaseFunction } from "../services/baseFunction";

export async function Order(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const entity = new OrderEntity();
    const { body, status } = await BaseFunction<OrderModel>(entity, request);
    return { body, status };
};

app.http('Order', {
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    authLevel: 'anonymous',
    handler: Order
});
