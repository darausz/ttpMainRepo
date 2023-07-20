const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Pokemon = db.define("pokemon", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    trainer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

const Trainer = require("./Pokemon");
Pokemon.belongsTo(Trainer);

module.exports = Pokemon;

