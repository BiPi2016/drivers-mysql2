const Sequelize = require("sequelize");
const {
    HOST,
    DB,
    USER,
    PASSWORD,
    dialect
} = require('../config/db.config');

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    dialect: dialect,
    host: HOST
});

module.exports = sequelize;