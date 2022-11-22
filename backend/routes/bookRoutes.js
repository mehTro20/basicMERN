const express = require("express");
const router = express.Router();
const {
  getBooks,
  setBook,
  putBook,
  deleteBook,
} = require("../controllers/bookController");

// router.get("/", getBooks);
// router.post("/", setBook);
router.route("/").get(getBooks).post(setBook);

// router.put("/:id", putBook);
// router.delete("/:id", deleteBook);
router.route("/:id").put(putBook).delete(deleteBook);

module.exports = router;
