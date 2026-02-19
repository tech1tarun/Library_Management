const express = require("express");
const router = express.Router();
const issueController = require("../controllers/issueController");

router.post("/issue", issueController.issueBook);
router.put("/return/:id", issueController.returnBook);
router.get("/", issueController.getIssues);

module.exports = router;
