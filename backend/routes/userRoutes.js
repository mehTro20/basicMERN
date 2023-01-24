const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getPerson,
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/person", protect, getPerson);

module.exports = router;
