const express = require("express");
const router = express.Router();
const {
  issueBook,
  returnBook,
  getActiveIssues,
  getOverdueIssues,
  getMyIssues,
} = require("../controllers/issueController");
const protect = require("../middleware/authMiddleware");

router.post("/issue", protect, issueBook);
router.post("/return", protect, returnBook);
router.get("/active", protect, getActiveIssues);
router.get("/overdue", protect, getOverdueIssues);
router.get("/my-issues", protect, getMyIssues);

module.exports = router;
