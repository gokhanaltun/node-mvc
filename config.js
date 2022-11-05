require("dotenv").config();
const { join } = require("path");

global.join = join;
global.__basePath = process.cwd();
global.__config = join(__basePath, "/config");
global.__app = join(__basePath, "/app");
global.__models = join(__app, "/models");
global.__views = join(__app, "/views");
global.__controllers = join(__app, "/controllers");
global.__routes = join(__app, "/routes");
global.__middlewares = join(__app, "/middlewares");


const PORT = process.env.PORT || 3000;

const db_configs = {
    DB_NAME: process.env.DB_NAME || "node-mvc",
    DB_USERNAME: process.env.DB_USERNAME || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_DIALECT: process.env.DB_DIALECT || "mysql",
}

module.exports = {
    PORT,
    db_configs,
}