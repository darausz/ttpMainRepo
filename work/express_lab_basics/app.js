const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Welcome to the site</h1>`);
})
app.get("/cars", (req, res) => {
    res.send(`<h1>Welcome to cars</h1>`);
})
app.get("/trucks", (req, res) => {
    res.send(`<h1>Welcome to trucks</h1>`);
})

const PORT = 1337;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})