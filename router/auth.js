require("express-async-errors");

const express = require("express");
const Router = express.Router();

const { signUP, logIN } = require("../controller/auth");

Router.post("/signUP", signUP);
Router.post("/logIn", logIN);

module.exports = Router;
