const MongoClient = require("mongodb").MongoClient;

let __connection = null;

const open = function () {
    if (get() == null) {
        MongoClient.connect("mongodb://localhost:27017/mwa", function (err, client) {
            if (err) {
                console.log("db connection fail");
                return;
            }
            __connection = client.db("mwa");
        });
    }

}

const get = function () {
    return __connection;
}

module.exports = { open, get }