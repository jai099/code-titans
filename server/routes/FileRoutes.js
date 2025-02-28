const express = require("express");
const {
    fileUpload,
    getFileList,
} = require("../controllers/FileUpload");

const routers = express.Router();

routers.route("/uploadFile").post(fileUpload);
routers.route("/getFile").get(getFileList);

module.exports = routers;