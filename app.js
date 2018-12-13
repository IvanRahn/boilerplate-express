const express =require("express");
const morgan = require("morgan");

const app = express();

app.set('view engine', 'pug');

app.use(express.static("./public"));

app.use(morgan("combined"));

app.use(require("./routes"))


module.exports = app;