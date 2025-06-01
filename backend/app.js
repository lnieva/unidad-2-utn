const express = require('express');
const cors = require('cors');
var jwt = require('jsonwebtoken');

//--------------------------------------------

//const middleware = require('./middleware/middleware.js')

const server = express();
server.use(express.json());
server.use(cors()) // para que permita que manden informacion desde afuera de este mismo puerto
server.listen(3000, ()=> console.log("Server Running"));

const user = require('./route/user.js')

server.get("/user", user.contact)