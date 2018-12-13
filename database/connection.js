function connect(db) {
    const mongoose = require("mongoose");
console.log(process.env.DB + `_${db}`)
    mongoose.connect(process.env.DB + `_${db}`, {
        useCreateIndex: true,
        useNewUrlParser: true
    });
    mongoose.Promise = global.Promise;
    mongoose.connection.on("error", error => console.log(`MONGOOSE ERROR: ${error}`));
}
module.exports = connect;