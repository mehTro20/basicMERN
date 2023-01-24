const express = require("express");
const router = express.Router();
const {
  getBooks,
  setBook,
  putBook,
  deleteBook,
} = require("../controllers/bookController");
const { protect } = require("../middleware/authMiddleware");

// router.get("/", getBooks);
// router.post("/", setBook);
router.route("/").get(protect, getBooks).post(protect, setBook);

// router.put("/:id", putBook);
// router.delete("/:id", deleteBook);
router.route("/:id").put(protect, putBook).delete(protect, deleteBook);

module.exports = router;
