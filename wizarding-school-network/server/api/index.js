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
      await existingSchool.destroy();
    }
  }
  catch( error) {
    res.send(error);
  }
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
  const existingStudent = await student.findByPk(studentId);
  res.send(existingStudent);
})

router.post("/students", async (req, res) => {
  try {
    const existingStudent = await student.findOne({ where: { firstName: req.body.firstName, lastName: req.body.lastName } });
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
  try {
    const existingStudent = await student.findOne({ where: { id: studentId } });
    if (existingStudent) {
      await existingStudent.destroy();
    }
  }
  catch( error) {
    res.send(error);
  }
})

router.put("/students", async (req, res) => {
  try {
    const existingStudent = await student.findOne({ where: { firstName: req.body.firstName, lastName: req.body.lastName } });
    if (existingStudent) {
      existingStudent.set(req.body);
      await existingStudent.save();
      res.send(existingStudent);
    }
}
  catch (error) {
    res.send(error);
  }
})

router.put("/students/:studentId", async (req, res) => {
  try {
    const existingStudent = await student.findOne({ where: { id: req.params.id } });
    if (existingStudent) {
      existingStudent.set( {
        wizardingSchoolId: null
      });
      await existingStudent.save();
      res.send(existingStudent);
    }
  }
catch (error) {
  res.send(error);
}
})

module.exports = router;
