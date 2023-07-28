const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db");

const pokemon = db.define("Pokemon", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    trainer: {
        type: DataTypes.STRING,
        allowNull:  false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = pokemon;

