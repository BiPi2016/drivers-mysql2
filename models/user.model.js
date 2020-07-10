const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const Driver = sequelize.define('Driver', {
    id: {
        type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
        autoIncriment: true,
        allowNull: false,
        primaryKey: true
    },
    mobile: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    email_id: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    license: {
        type: Sequelize.STRING(20),
        defaultValue: null
    },
    regno: {
        type: Sequelize.String(20),
        defaultValue: null
    },
    address: {
        type: Sequelize.TEXT
    },
    pincode: {
        type: Sequelize.STRING(10),
        defaultValue: null
    },
    city: {
        type: Sequelize.STRING(50),
        defaultValue: null
    },
    status: {
        type: Sequelize.STRING, //// enum('active', 'inactive', 'deleted') //
        defaultValue: 'active'
    },
    created_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    }

});