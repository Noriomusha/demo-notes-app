import { Table } from "sst/node/table";
import * as uuid from "uuid";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = handler(async (event) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: Table.Notes.tableName,
        Item: {
            // The attributes of the item to be created
            userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId, // The id of the author
            noteId: uuid.v1(), // A unique uuid 
            content: data.content, // Parsed from the request body
            attachment: data.attachment, //Parsed from request body
            createdAt: Date.now(), // Current Unix timestamp
        },
    };

    await dynamoDb.put(params);

    return params.Item;
}) 

    
/*
    try { 
        await dynamoDb.put(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: e.message }),
        };
    }
}
*/