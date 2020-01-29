const express = require("express");
const router = express.Router();

// @route   GET api/aut
// @desc    Test posts
// @access  Public
router.get("/", (req, res) => res.send("Posts Route"));

module.exports = router;
