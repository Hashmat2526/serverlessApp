'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient({
  // when we deploy this service , we have to remove these two lines
  region: "localhost",
  endpoint: "http://localhost:8000"
});

module.exports.create = (event, context, callback) => {
  // create a note and put it in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('Add a note')
  };
  callback(null,response);
}
module.exports.getOne = (event, context, callback) => {
  // create a note and put it in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('fetch a note')
  };
  callback(null,response);
}
module.exports.getAll = (event, context, callback) => {
  // create a note and put it in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('fetch all notes')
  };
  callback(null,response);
}
module.exports.update = (event, context, callback) => {
  // create a note and put it in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('Update a note')
  };
  callback(null,response);
}
module.exports.delete = (event, context, callback) => {
  // create a note and put it in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('Delete a note')
  };
  callback(null,response);
}

