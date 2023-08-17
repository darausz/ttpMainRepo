const db = require("../db");
const {STRING, TEXT} = require("sequelize");

const wizardingSchool = db.define("wizarding school", {
  name: {
    type: STRING,
    allowNull: false,
    allowEmpty: false
  },
  imageUrl: {
    type: STRING,
    defaultValue: ""
  },
  address: {
    type: STRING,
    allowNull: false,
    allowEmpty: false
  },
  description: {
    type: TEXT
  },
})

module.exports = wizardingSchool;