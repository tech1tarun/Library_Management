import React from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center bg-white shadow px-6 py-4">
        <h1 className="text-xl font-semibold">
          Library Management - User Panel
        </h1>

        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Issue Book */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-64">
            <h2 className="text-lg font-semibold mb-3">Issue Book</h2>
            <p className="text-gray-500 text-sm mb-4">
              Borrow a book from library
            </p>
            <button
              onClick={() => navigate("/issue")}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Go
            </button>
          </div>

          {/* Return Book */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-64">
            <h2 className="text-lg font-semibold mb-3">Return Book</h2>
            <p className="text-gray-500 text-sm mb-4">Return issued book</p>
            <button
              onClick={() => navigate("/return")}
              className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Go
            </button>
          </div>

          {/* Reports */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-64">
            <h2 className="text-lg font-semibold mb-3">Reports</h2>
            <p className="text-gray-500 text-sm mb-4">
              View your transaction history
            </p>
            <button
              onClick={() => navigate("/reports")}
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
