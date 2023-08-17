"use strict";

const db = require("./db");
const student = require("./models/student");
const wizardingSchool = require("./models/wizardingSchool")

// Require your models and make your associations
wizardingSchool.hasMany(student);
student.belongsTo(wizardingSchool);

module.exports = {
  db, student, wizardingSchool
};
