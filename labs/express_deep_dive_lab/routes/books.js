express = require("express");
router = express.Router();

router.get("/", (req, res) => {
    res.send("this is a GET response for books")
})
router.get("/:id", (req, res) => {
    res.send(`this is a GET response for book with id ${req.params.id}`)
})
router.post("/", (req, res) => {
    res.send("this is a POST response for books")
})
router.put("/", (req, res) => {
    res.send("this is a PUT response for books")
})
router.delete("/", (req, res) => {
    res.send("this is a DELETE response for books")
})

module.exports = router;