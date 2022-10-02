const home = require("../controllers/home.controller");

const homeRouter = require("express").Router();

homeRouter.get("/", home);

module.exports = homeRouter;
