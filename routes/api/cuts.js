const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the cuts route" }));

module.exports = router;