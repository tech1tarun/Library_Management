import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const IssueBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [book, setBook] = useState(null);
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBook(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleIssue = async () => {
    if (!issueDate || !returnDate) {
      setError("All fields are mandatory");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    if (issueDate < today) {
      setError("Issue date cannot be in past");
      return;
    }

    const issue = new Date(issueDate);
    const returnD = new Date(returnDate);

    const diffDays = (returnD - issue) / (1000 * 60 * 60 * 24);

    if (diffDays > 15 || diffDays <= 0) {
      setError("Return date must be within 15 days");
      return;
    }

    setError("");

    const res = await fetch("http://localhost:5000/api/issues/issue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bookId: id,
        issueDate,
        returnDate,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    alert("Book Issued Successfully");
    navigate("/user");
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Issue Book</h1>

      <div className="mb-4">
        <label>Book Name</label>
        <input
          value={book.title}
          disabled
          className="w-full border px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label>Author</label>
        <input
          value={book.author}
          disabled
          className="w-full border px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label>Serial Number</label>
        <input
          value={book.serialNumber}
          disabled
          className="w-full border px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label>Issue Date</label>
        <input
          type="date"
          className="w-full border px-3 py-2"
          value={issueDate}
          onChange={(e) => setIssueDate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label>Return Date</label>
        <input
          type="date"
          className="w-full border px-3 py-2"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <button
        onClick={handleIssue}
        className="bg-blue-600 text-white px-6 py-2 rounded-md"
      >
        Confirm Issue
      </button>
    </div>
  );
};

export default IssueBook;
