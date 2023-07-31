const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db");

const trainer = db.define("Trainer", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  team: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageURL: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = trainer;