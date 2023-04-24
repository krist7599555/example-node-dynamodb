// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html
import {
  DynamoDBClient,
  CreateTableCommand,
  TableClass,
  KeyType,
  ScalarAttributeType,
} from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient({
  endpoint: "http://0.0.0.0:8000",
  region: "None",
});

const create_table = await ddbClient.send(
  new CreateTableCommand({
    TableName: "User",
    TableClass: TableClass.STANDARD,
    AttributeDefinitions: [
      {
        AttributeName: "name",
        AttributeType: ScalarAttributeType.S,
      },
      { AttributeName: "id", AttributeType: ScalarAttributeType.N },
    ],
    KeySchema: [
      { AttributeName: "id", KeyType: KeyType.HASH },
      { AttributeName: "name", KeyType: KeyType.RANGE },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  })
);

// // Create the DynamoDB document client.
// const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, {
//   marshallOptions,
//   unmarshallOptions,
// });

// export const putItem = async () => {

//   try {
//     const data = await ddbDocClient.send(new PutItemCommand({
//     TableName: "TABLE_NAME",
//     Item:  {
//       PRIMARY_KEY: AttributeValue "VALUE_1", //e.g. title: "Rush"
//       SORT_KEY: "VALUE_2", // e.g. year: "2013"
//     },
//     }));
//     console.log("Success - item added or updated", data);
//   } catch (err) {
//     console.log("Error", err.stack);
//   }
// };

console.log(await putItem());
