const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    issueDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    actualReturnDate: Date,
    fine: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Issue", issueSchema);
