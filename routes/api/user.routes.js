const express = require("express");
const router = express.Router();

//@route GET api/user/me
//@desc Test route
//@access Public
router.get("/hello", (req, res, next) => {
  res.json("hello");
});

module.exports = router;
