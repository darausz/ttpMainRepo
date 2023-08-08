"use strict";
const router = require("express").Router();
const db = require("../db");

// require your database and place your routes here
router.get("/wizarding-schools", (req, res) => {
  const schools = db.findAll();
  res.send(schools);
})

router.get("/students", (req, res) => {
  const students = db.findAll();
  res.send(students);
})

module.exports = router;
