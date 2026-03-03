import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const books = location.state?.books || [];
  const [selectedBook, setSelectedBook] = React.useState(null);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Search Result</h1>

      <table className="w-full border text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Book Name</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Serial</th>
            <th className="border p-2">Available</th>
            <th className="border p-2">Select</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="border p-2">{book.title}</td>
              <td className="border p-2">{book.author}</td>
              <td className="border p-2">{book.serialNumber}</td>
              <td className="border p-2">
                {book.availableCopies > 0 ? "Y" : "N"}{" "}
              </td>
              <td className="border p-2">
                {book.availableCopies > 0 ? (
                  <input
                    type="radio"
                    name="bookSelect"
                    onChange={() => setSelectedBook(book._id)}
                  />
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        disabled={!selectedBook}
        onClick={() => navigate(`/issue/${selectedBook}`)}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md"
      >
        Issue Selected Book
      </button>
    </div>
  );
};

export default SearchResult;
