const express = require("express");
const {
    signupCollege,
    getAllColleges,
} = require("../controllers/CollegeControls");

const routers = express.Router();

routers.route("/registerCollege").post(signupCollege);
routers.route("/getCollege").get(getAllColleges);

module.exports = routers;