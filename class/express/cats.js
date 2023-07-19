const express = require("express");
const router = exress.Router();

router.get("/", (req, res) => {
    res.send("This is the cats GET reponse");
})
module.exports = router;