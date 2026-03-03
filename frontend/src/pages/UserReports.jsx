import React from "react";
import { useNavigate } from "react-router-dom";

const ReportsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate("/chart")}
          className="text-blue-600 hover:underline"
        >
          Chart
        </button>

        <h1 className="text-xl font-semibold">Available Reports</h1>

        <button
          onClick={() => navigate("/user")}
          className="text-blue-600 hover:underline"
        >
          Home
        </button>
      </div>

      {/* Reports List */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-xl">
        <ul className="space-y-3 text-blue-700 font-medium">
          <li
            className="hover:underline cursor-pointer"
            onClick={() => alert("Master List of Books")}
          >
            Master List of Books
          </li>

          <li
            className="hover:underline cursor-pointer"
            onClick={() => alert("Master List of Movies")}
          >
            Master List of Movies
          </li>

          <li
            className="hover:underline cursor-pointer"
            onClick={() => alert("Master List of Memberships")}
          >
            Master List of Memberships
          </li>

          <li
            className="hover:underline cursor-pointer"
            onClick={() => alert("Active Issues")}
          >
            Active Issues
          </li>

          <li
            className="hover:underline cursor-pointer"
            onClick={() => alert("Overdue Returns")}
          >
            Overdue returns
          </li>

          <li
            className="hover:underline cursor-pointer"
            onClick={() => alert("Pending Issue Requests")}
          >
            Pending Issue Requests
          </li>
        </ul>

        {/* Logout */}
        <div className="text-right mt-6">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
