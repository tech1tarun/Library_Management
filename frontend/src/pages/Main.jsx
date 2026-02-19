import React from "react";
import { useNavigate } from "react-router-dom";

const MainLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12">
        Library Management System
      </h1>

      {/* Cards */}
      <div className="flex gap-10">
        {/* User Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center w-64">
          <h2 className="text-xl font-semibold mb-4">User</h2>
          <p className="text-gray-500 text-sm mb-6">Issue and return books</p>
          <button
            onClick={() => navigate("/userlogin")}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </div>

        {/* Admin Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center w-64">
          <h2 className="text-xl font-semibold mb-4">Admin</h2>
          <p className="text-gray-500 text-sm mb-6">
            Manage books, users & reports
          </p>
          <button
            onClick={() => navigate("/admin")}
            className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-5 text-gray-500 text-sm">
        © 2026 Library Management
      </footer>
    </div>
  );
};

export default MainLogin;
