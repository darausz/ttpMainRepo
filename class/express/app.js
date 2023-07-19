const express = require("express");
const app = express();
const catsRouter = require("./cats");

//middleware, gets called before path, needs to have next
app.use((req, res, next) => {
    console.timeLog("time:", date.now());
    next();
});

app.use("/cats", catsRouter);

app.use(express.urlencoded({extended: false})); //gets info from post

app. use ((err, req, res, next) => {
    console.error(err.stack);
    resizeTo.status(500).send("something broke"); //error handling
})

app.get("/", (req, res) => {
    res.send(`<h1>Welcome to the site</h1>`);
})
app.get("/cars", (req, res) => {
    res.send(`<h1>Welcome to cars</h1>`);
})
app.get("/userId/:id", (req, res) => {
    res.send(req.params);
})

app.post("/", (req, res) => {
    if (req.body.name == undefined) {
        return next(new Error("some error")); //sends error to middleware
    }
    res.send(req.body);
})

//http://localhost:1337/userId/23 outputs {is : 23}
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})