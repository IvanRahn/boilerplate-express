const express =require("express");
const morgan = require("morgan");

app.use(morgan("combined"));
const app = express();



module.exports = app;