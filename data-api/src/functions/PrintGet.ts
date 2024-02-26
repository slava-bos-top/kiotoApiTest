import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { 
    TableClient,
    AzureNamedKeyCredential, 
} from "@azure/data-tables";

import * as dotenv from "dotenv";
import generateUUID from "../utils/generateUUID";

dotenv.config();

export async function PrintGet(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    const tableName = "BigTable";

    const account = process.env["ACCOUNT_NAME"];
    const accountKey = process.env["ACCOUNT_KEY"];
    const tableUrl = process.env["TABLES_URL"];

    const credential = new AzureNamedKeyCredential(account, accountKey);
    const client = new TableClient(tableUrl, tableName, credential, {allowInsecureConnection: true});

    const name = request.query.get('name')
    await client.createTable();

    await client.createEntity({
        partitionKey: tableName,
        rowKey: generateUUID(),
        name: `Hello, ${name}!`,
    });

    const entities = await client.listEntities();

    const items: any[] = [];
    for await (const entity of entities) {
        items.push(entity as unknown as any);
    }
   
    return { body: JSON.stringify(items), status: 200 };
};

app.http('PrintGet', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: PrintGet
});
