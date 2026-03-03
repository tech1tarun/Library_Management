import React from "react";
import { useNavigate } from "react-router-dom";

const Maintenance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-blue-600 underline">Chart</button>

        <h1 className="text-xl font-semibold">Housekeeping</h1>

        <button
          onClick={() => navigate("/admin")}
          className="text-blue-600 underline"
        >
          Home
        </button>
      </div>

      {/* Main Section */}
      <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
        <table className="w-full border border-black text-left">
          <tbody>
            {/* Membership */}
            <tr>
              <td className="border border-black p-3 font-semibold">
                Membership
              </td>
              <td className="border border-black p-3 space-x-6">
                <button className="underline text-blue-600">Add</button>
                <button className="underline text-blue-600">Update</button>
              </td>
            </tr>

            {/* Books / Movies */}
            <tr>
              <td className="border border-black p-3 font-semibold">
                Books/Movies
              </td>
              <td className="border border-black p-3 space-x-6">
                <button className="underline text-blue-600">Add</button>
                <button className="underline text-blue-600">Update</button>
              </td>
            </tr>

            {/* User Management */}
            <tr>
              <td className="border border-black p-3 font-semibold">
                User Management
              </td>
              <td className="border border-black p-3 space-x-6">
                <button className="underline text-blue-600">Add</button>
                <button className="underline text-blue-600">Update</button>
              </td>
            </tr>
          </tbody>
        </table>

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

export default Maintenance;
