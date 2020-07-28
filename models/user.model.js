const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Driver", {
    id: {
      type: DataTypes.INTEGER(6).UNSIGNED.ZEROFILL,
      autoIncriment: true,
      allowNull: false,
      primaryKey: true,
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email_id: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    license: {
      type: DataTypes.STRING(20),
      defaultValue: null,
    },
    regno: {
      type: DataTypes.STRING(20),
      defaultValue: null,
    },
    address: {
      type: DataTypes.TEXT,
    },
    pincode: {
      type: DataTypes.STRING(10),
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    status: {
      type: DataTypes.STRING, //// enum('active', 'inactive', 'deleted') //
      defaultValue: "active",
    },
    created_on: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
  });
};
