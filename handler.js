'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  // when we deploy this service , we have to remove these two lines
  region: "localhost",
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey',
  endpoint: "http://localhost:8000",
  
});

module.exports.create = (event, context, callback) => {
  // create a note and put it in the database
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      content: data.content
    }
  }
  dynamoDB.put(params, (error) => {
    if (error) {
      console.error(error);
      return callback(null, {
        statusCode: error.statusCode || 500,
        headers: { "Content-Type": "text/plain" },
        body: "Could not create it "
      });
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item)
    };
    callback(null, response);
  });
}
module.exports.getOne = (event, context, callback) => {
  // create a note and put it in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('fetch a note')
  };
  callback(null, response);
}
module.exports.getAll = (event, context, callback) => {
  // create a note and put it in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('fetch all notes')
  };
  callback(null, response);
}
module.exports.update = (event, context, callback) => {
  // create a note and put it in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('Update a note')
  };
  callback(null, response);
}
module.exports.delete = (event, context, callback) => {
  // create a note and put it in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('Delete a note')
  };
  callback(null, response);
}

