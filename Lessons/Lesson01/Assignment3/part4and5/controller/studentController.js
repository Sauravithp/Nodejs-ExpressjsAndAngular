const fs = require("fs");
const path = require("path");
let student = require("../data/students.json");

const getAll = function (req, res) {
    res.status(200);
    res.setHeader("Content-Type", "application/json");
    res.json(student);
}

const getOne = function (req, res) {
    const id = req.params.id;
    const result = student[id];
    res.status(200);
    res.setHeader("Content-Type", "application/json");
    res.json({ 'result': result });
}


const add = function (req, res) {
    const body = req.body;
    fs.writeFileSync(path.join(__dirname, "..", "data", "students.json"), JSON.stringify(body));
    res.status(200);
    res.setHeader("Content-Type", "application/json");
    res.json({ 'message': 'Student Added successfully!' });
}

module.exports = { add, getOne, getAll };