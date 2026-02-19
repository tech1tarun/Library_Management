const Issue = require("../models/Issue");
const Book = require("../models/Book");

// ISSUE BOOK
exports.issueBook = async (req, res) => {
  const { userId, bookId } = req.body;

  const book = await Book.findById(bookId);

  if (!book || book.availableCopies <= 0) {
    return res.status(400).json({ message: "Book not available" });
  }

  const issue = await Issue.create({
    user: userId,
    book: bookId,
  });

  book.availableCopies -= 1;
  await book.save();

  res.status(201).json(issue);
};

// RETURN BOOK
exports.returnBook = async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    return res.status(404).json({ message: "Issue not found" });
  }

  if (issue.status === "returned") {
    return res.status(400).json({ message: "Already returned" });
  }

  issue.status = "returned";
  issue.returnDate = new Date();
  await issue.save();

  const book = await Book.findById(issue.book);
  book.availableCopies += 1;
  await book.save();

  res.json(issue);
};

// GET ALL ISSUES
exports.getIssues = async (req, res) => {
  const issues = await Issue.find().populate("user").populate("book");

  res.json(issues);
};
