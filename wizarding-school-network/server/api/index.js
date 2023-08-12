"use strict";
const router = require("express").Router();
const { student, wizardingSchool } = require("../db");

// require your database and place your routes here
router.get("/wizarding-schools", async (req, res) => {
  const schools = await wizardingSchool.findAll();
  res.send(schools);
})

router.get("/wizarding-schools/:schoolId", async (req, res) => {
  const schoolId = req.params.schoolId;
  const school = await wizardingSchool.findByPk(schoolId);
  res.send(school);
})

router.post("/wizarding-schools", async (req, res) => {
  try {
    const existingSchool = await wizardingSchool.findOne({ where: { name: req.body.name } });
    if (!existingSchool) {
      const school = await wizardingSchool.create(req.body);
      res.send(school);
    }
  }
  catch (error) {
    res.send(error)
  };
})

router.delete("/wizarding-schools/:schoolId", async (req, res) => {
  try {
    const existingSchool = await wizardingSchool.findOne({ where: { id: req.params.schoolId } });
    if (existingSchool) {
      res.send(existingSchool);
      await existingSchool.destroy();
    }
  }
  catch( error) {
    res.send(error);
  }
  // const schoolId = req.params.schoolId;
  // wizardingSchool.destroy({ where: { id: schoolId } });
})

router.put("/wizarding-schools", async (req, res) => {
  try {
    const existingSchool = await wizardingSchool.findOne({ where: { name: req.body.name } });
    if (existingSchool) {
      existingSchool.set(req.body);
      await existingSchool.save();
      res.send(existingSchool);
    }
  }
  catch (error) {
    res.send(error);
  }

})

router.get("/students", async (req, res) => {
  const students = await student.findAll();
  res.send(students);
})

router.get("/students/:studentId", async (req, res) => {
  const studentId = req.params.studentId;
  const student = await student.findByPk(studentId);
  res.send(student);
})

router.post("/students", async (req, res) => {
  try {
    const existingStudent = await student.findOne({ where: { firstName: req.body.firstName } });
    if (!existingStudent) {
      const newStudent = await student.create(req.body);
      res.send(newStudent);
    }
  }
  catch (error) {
    res.send(error);
  }
})

router.delete("/students/:studentId", async (req, res) => {
  const studentId = req.params.studentId;
  await student.destroy({ where: { id: studentId } });
})

router.put("/students", async (req, res) => {
  try {
    const existingStudent = await student.findOne({ where: { name: req.body.name } });
    if (existingStudent) {
      const student = await student.update(req.body, { where: { id: req.params.id } });
      res.send(student);
    }
}
  catch (error) {
    res.send(error);
  }
})

module.exports = router;
