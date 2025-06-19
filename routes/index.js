const express = require("express");
const indexController = require("../controller/indexController");

const route = express.Router();

// ROUTES
// HOMEPAGE
route.get("/", indexController.homepage);

// ABOUT US
route.get("/about", indexController.about);

// SERVICES
route.get("/services", indexController.services);

// CONTACT US
route.get("/contact", indexController.contact);

module.exports = route;
