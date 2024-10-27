// handler connector to api
const handlerapi = require('./handler.api');
const creds = require('./credentials');
module.exports = handlerapi(creds);