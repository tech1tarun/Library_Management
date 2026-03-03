const Issue = require("../models/Issue");
const Book = require("../models/Book");

// Issue Book
exports.issueBook = async (req, res) => {
  try {
    const {  bookId, issueDate, returnDate } = req.body;
    const userId = req.user._id;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (!book.available) {
      return res.status(400).json({ message: "Book not available" });
    }

    const issue = await Issue.create({
      user: userId,
      book: bookId,
      issueDate,
      returnDate,
    });

    book.available = false;
    await book.save();

    res.status(201).json({ message: "Book issued successfully", issue });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Return Book
exports.returnBook = async (req, res) => {
  try {
    const { issueId, actualReturnDate } = req.body;

    const issue = await Issue.findById(issueId).populate("book");

    if (!issue) {
      return res.status(404).json({ message: "Issue record not found" });
    }

    if (issue.actualReturnDate) {
      return res.status(400).json({ message: "Book already returned" });
    }

    const returnDate = new Date(issue.returnDate);
    const actualDate = new Date(actualReturnDate);

    let fine = 0;

    if (actualDate > returnDate) {
      const lateDays = Math.ceil(
        (actualDate - returnDate) / (1000 * 60 * 60 * 24)
      );
      fine = lateDays * 10; // ₹10 per day
    }

    issue.actualReturnDate = actualDate;
    issue.fine = fine;

    await issue.save();

    // Make book available again
    issue.book.available = true;
    await issue.book.save();

    res.json({
      message: "Book returned successfully",
      fine,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//active issue API
exports.getActiveIssues = async (req, res) => {
  try {
    const issues = await Issue.find({
      actualReturnDate: { $exists: false }
    })
    .populate("user", "username")
    .populate("book", "title serialNumber");

    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//overdues issues API
exports.getOverdueIssues = async (req, res) => {
  try {
    const today = new Date();

    const issues = await Issue.find({
      returnDate: { $lt: today },
      actualReturnDate: { $exists: false }
    })
    .populate("user", "username")
    .populate("book", "title serialNumber");

    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyIssues = async (req, res) => {
  try {
    const issues = await Issue.find({
      user: req.user._id,
      returned: false
    }).populate("book");

    res.json(issues);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
