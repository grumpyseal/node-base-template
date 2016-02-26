
"use strict";

import restify from 'restify';

function respond(req, res, next) {
  let msg = { 'hello': req.params.name }
  res.send(msg);
  next();
}

let server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

export default server;