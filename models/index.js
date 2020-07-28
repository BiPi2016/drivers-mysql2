"use strict";

const config = require("../config/db.config");

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const { Console } = require("console");
const basename = path.basename(__filename);
const db = {};

console.log(config);

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Unable to connect to DB " + err));

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
