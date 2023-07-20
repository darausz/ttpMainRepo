const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Trainer = db.define("trainer", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

const Pokemon = require("./Pokemon");
Trainer.hasMany(Pokemon);

module.exports = Trainer;
