const express = require("express");
const {PORT} = require("./config");
const routes = require(join(__routes, "/import-routes"));

const app = express();

app.set("view engine", "ejs");
app.set("views", __views);

app.use("/static", express.static("public"));
app.use(routes.web_router);


app.listen(PORT, (err) => err ? console.log(err) : console.log(`listening port: ${PORT}`));