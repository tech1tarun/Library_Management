import React, { useEffect, useState } from "react";

const ReturnBook = () => {
  const token = localStorage.getItem("token");

  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [actualReturnDate, setActualReturnDate] = useState("");
  const [fine, setFine] = useState(null);
  const [error, setError] = useState("");

  // Load active issues
  useEffect(() => {
    fetch("http://localhost:5000/api/issues/my-issues", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setIssues(data))
      .catch((err) => console.error(err));
  }, []);

  const handleReturn = async () => {
    if (!selectedIssue) {
      setError("Select a book to return");
      return;
    }

    if (!actualReturnDate) {
      setError("Select return date");
      return;
    }

    setError("");

    const res = await fetch("http://localhost:5000/api/issues/return", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        issueId: selectedIssue._id,
        actualReturnDate,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    setFine(data.fine);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Return Book</h1>

      {issues.length === 0 && <p>No active issued books</p>}

      {issues.map((issue) => (
        <div
          key={issue._id}
          className="border p-3 mb-2 cursor-pointer"
          onClick={() => setSelectedIssue(issue)}
        >
          <p>
            <strong>Book:</strong> {issue.book.title}
          </p>
          <p>
            <strong>Author:</strong> {issue.book.author}
          </p>
          <p>
            <strong>Issue Date:</strong> {issue.issueDate.substring(0, 10)}
          </p>
          <p>
            <strong>Return Date:</strong> {issue.returnDate.substring(0, 10)}
          </p>
        </div>
      ))}

      {selectedIssue && (
        <div className="mt-4">
          <label>Actual Return Date</label>
          <input
            type="date"
            className="block border px-3 py-2 mt-2"
            value={actualReturnDate}
            onChange={(e) => setActualReturnDate(e.target.value)}
          />

          <button
            onClick={handleReturn}
            className="mt-3 bg-green-600 text-white px-6 py-2 rounded-md"
          >
            Confirm Return
          </button>
        </div>
      )}

      {fine !== null && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Fine Amount: ₹{fine}</h2>
        </div>
      )}

      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default ReturnBook;
