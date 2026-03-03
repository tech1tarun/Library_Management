import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();

  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleCancel = () => {
    setBookName("");
    setAuthor("");
    setIssueDate("");
    setReturnDate("");
    setRemarks("");
  };

  const handleConfirm = () => {
    alert("Confirm clicked (backend connection later)");
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-blue-600 underline">Chart</button>

        <h1 className="text-xl font-semibold">Transactions</h1>

        <button
          onClick={() => navigate("/transactions")}
          className="text-blue-600 underline"
        >
          Home
        </button>
      </div>

      {/* Main Layout */}
      <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {/* Left Questions Column */}
          <div className="space-y-4 font-semibold">
            <p>Is book available?</p>
            <p>Issue book?</p>
            <p>Return book?</p>
            <p>Pay Fine?</p>
          </div>

          {/* Right Form Column */}
          <div className="space-y-4">
            <div>
              <label>Enter Book Name</label>
              <select
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                className="w-full border border-black p-2"
              >
                <option value="">Select</option>
                <option>The Alchemist</option>
                <option>Atomic Habits</option>
                <option>Harry Potter</option>
              </select>
            </div>

            <div>
              <label>Enter Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full border border-black p-2"
              />
            </div>

            <div>
              <label>Issue Date</label>
              <input
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="w-full border border-black p-2"
              />
            </div>

            <div>
              <label>Return Date</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full border border-black p-2"
              />
            </div>

            <div>
              <label>Remarks (Non Mandatory)</label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full border border-black p-2"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-10 mt-6">
          <button
            onClick={handleCancel}
            className="bg-blue-500 text-white px-8 py-2 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="bg-blue-600 text-white px-8 py-2 rounded-md"
          >
            Confirm
          </button>
        </div>

        {/* Logout */}
        <div className="flex justify-end mt-6">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            className="text-black underline"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
