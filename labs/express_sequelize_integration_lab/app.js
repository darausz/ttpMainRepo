require("dotenv").config();
const express = require("express");
const Sequelize = require("sequelize");

const app = express();
console.log(process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL);

let Student = sequelize.define("student", {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
});

let Course = sequelize.define("course", {
    course_name: Sequelize.STRING,
    course_code: Sequelize.STRING,
});

Student.belongsToMany(Course, {through: "StudentCourses"});
Course.belongsToMany(Student, {through: "StudentCourses"});

(async () => {
    try {
        await sequelize.sync();
        console.log("models synced with database");
    }
    catch (err) {
        console.error(err);
    }
})();

app.get("/students", async (req, res) => {
    try {
        const students = await Student.findAll();
        res.send(students);
    } catch (err) {
        console.error(err);
    }
})

app.post("/students", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (err) {
        console.error(err);
    }

})

const PORT = 1337;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});