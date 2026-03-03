import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookAvailable = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!title && !author) {
      setError("Select at least one search field");
      return;
    }

    setError("");

    try {
      const res = await fetch(
        `http://localhost:5000/api/books/search?title=${title}&author=${author}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      navigate("/search-result", { state: { books: data } });
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Book Availability</h1>

      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label className="block mb-1">Book Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Author Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded-md"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-2 rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default BookAvailable;
