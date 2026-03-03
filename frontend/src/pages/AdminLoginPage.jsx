import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!userId || !password) {
      alert("Please enter User ID and Password");
      return;
    }

    if (userId === "adm" && password === "adm") {
      navigate("/admin");
    } else if (userId === "user" && password === "user123") {
      navigate("/user");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleCancel = () => {
    setUserId("");
    setPassword("");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-10 w-100">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:underline"
          >
            Back
          </button>
          <button className="text-blue-600 hover:underline">Chart</button>
        </div>

        <h1 className="text-xl font-semibold text-center mb-8">
          Library Management System
        </h1>

        {/* User ID */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">User ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleCancel}
            className="px-6 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            onClick={handleLogin}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
