const Book = require("../models/Book");

// Add Book (Admin)
exports.addBook = async (req, res) => {
  try {
    const { title, author, category } = req.body;

    const book = await Book.create({
      title,
      author,
      category,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get book by id
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search Books
exports.searchBooks = async (req, res) => {
  try {
    const { title } = req.query;

    const books = await Book.find({
      title: { $regex: title, $options: "i" },
    });

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Availability
exports.updateAvailability = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndUpdate(
      id,
      { available: req.body.available },
      { new: true },
    );

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
