const express = require("express");
const app = express();

const PORT = 3000;

var debug = require('debug')('host-node-amplify:server');
var http = require('http');
var port = normalizePort(process.env.PORT || '3000');

app.get("/",(req,res)=> {
  console.log("default route");
  res.send("hello world!");
});

app.get("/products",(req,res)=> {
  console.log("products route");
  res.send([{id:1, name:"product1"},{id:2, name:"product2"}]);
});


app.listen(PORT, ()=>{
  console.log("app is running on " + PORT);
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
