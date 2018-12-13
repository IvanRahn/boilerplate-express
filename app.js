const express =require("express");
const morgan = require("morgan");
const { errors } = require("celebrate");

const app = express();

app.set('view engine', 'pug');
app.use(express.static("./public"));

app.use(express.urlencoded());
app.use(express.json());

app.use(morgan("combined"));

app.use(require("./routes"))

app.use(errors());
module.exports = app;