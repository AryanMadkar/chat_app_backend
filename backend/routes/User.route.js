const express = require("express");
const router = express.Router();
const {
  registeruser,
  loginuser,
  logoutuser,
  getotheruser,
} = require("../controllers/User.controller");
const { isauthenticated } = require("../middleware/Isauthenticated");

// Register a new user
router.post("/register", registeruser);
router.post("/login", loginuser);
router.get("/logout", logoutuser);
router.get("/getall", isauthenticated, getotheruser);
module.exports = router;
