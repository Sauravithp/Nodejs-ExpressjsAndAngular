const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let __connection = null;

const open = function () {
    if (get() == null) {
        MongoClient.connect(process.env.DATABASE_URL, function (err, client) {
            if (err) {
                console.log("db connection fail");
                return;
            }
            __connection = client.db(process.env.DATABASE_NAME);
            console.log("Db connected");
        });
    }

}

const get = function () {
    return __connection;
}

module.exports = { open, get }