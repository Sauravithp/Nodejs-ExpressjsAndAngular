const MongoClient = require("mongodb").MongoClient;

let __connection = null;

const open = function () {
    if (get() == null) {
        MongoClient.connect("mongodb://localhost:27017/meanGames", function (err, client) {
            if (err) {
                console.log("db connection fail");
                return;
            }
            __connection = client.db(meanGames);
        });
    }

}

const get = function () {
    return _connection;
}

module.exports = { open, get }