require("dotenv").config();
const app =require("./app");
const connect = require("./database/connection")("DEV");

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))