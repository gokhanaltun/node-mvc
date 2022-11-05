const web_router = require("express").Router();
const {web_controllers} = require(join(__controllers, "/import-controllers"));

web_router.get("/", web_controllers.index);

module.exports = web_router;