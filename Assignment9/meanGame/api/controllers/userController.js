const mongooose = require("mongoose");
const USER = mongooose.model("User");
require("dotenv").config();
const bcrypt = require("bcrypt");






const adduser = function (req, res) {

    const response = {
        status: 200,
        message: ''
    };

    if (req.body && req.body.username && req.body.password) {

        bcrypt.genSalt(10).then(salt => {
            bcrypt.hash(req.body.password, salt)
                .then((data) => {
                    const newUser = {
                        name: req.body.name,
                        username: req.body.username,
                        password: data
                    }
                    console.log("request body", newUser);
                    USER.create(newUser)
                        .then(data => {
                            console.log("Game created")
                            response.status = 200;
                            response.message = data;
                        }).catch(err => {
                            console.log(err);
                            response.status = 500;
                            response.message = "Internal Server error";
                        }).finally(() => {
                            res.status(response.status).json(response.message);
                        })
                })
                .catch((err) => {
                    console.log(err);
                    response.status = 500;
                    response.message = "Internal Server error";
                });

                if (response.status != 201) {
                    res.status(response.status).json(response.message);
                }
                
        }).catch(err => {
            console.log(err);
            response.status = 500;
            response.message = "Internal Server error";
        });

        if (response.status != 201) {
            res.status(response.status).json(response.message);
        }


    } else {
        console.log("Username and password not found");
        response.status = 400;
        response.message = "Username and password not provided";
    }

    if (response.status != 201) {
        res.status(response.status).json(response.message);
    }

};






module.exports = { adduser }



