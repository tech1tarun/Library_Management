const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  addBook,
  getBooks,
  searchBooks,
  updateAvailability,
  deleteBook,
  getBookById,
} = require("../controllers/bookController");

router.post("/", addBook);
router.get("/", protect, getBooks);
router.get("/search", protect, searchBooks);
router.put("/:id", updateAvailability);
router.delete("/:id", deleteBook);
router.get("/:id", protect, getBookById);

module.exports = router;
