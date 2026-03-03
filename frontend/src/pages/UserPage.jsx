import React from "react";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-blue-600 underline">Chart</button>

        <h1 className="text-xl font-semibold">Home Page</h1>

        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 underline"
        >
          Back
        </button>
      </div>

      {/* Second Row */}
      <div className="flex justify-start gap-10 mb-4">
        <button onClick={() => navigate("/reports")} className="font-semibold">
          Reports
        </button>

        <button
          onClick={() => navigate("/transactions")}
          className="font-semibold"
        >
          Transactions
        </button>
      </div>

      {/* Product Details Section */}
      <div className="bg-white p-6 shadow-md rounded-md w-full max-w-3xl mx-auto">
        <h2 className="text-center font-semibold mb-4">Product Details</h2>

        <table className="w-full border border-black text-center">
          <thead>
            <tr>
              <th className="border border-black p-2">Code No From</th>
              <th className="border border-black p-2">Code No To</th>
              <th className="border border-black p-2">Category</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border border-black p-2">SC(B/M)00001</td>
              <td className="border border-black p-2">SC(B/M)00000</td>
              <td className="border border-black p-2">Science</td>
            </tr>
            <tr>
              <td className="border border-black p-2">EC(B/M)00001</td>
              <td className="border border-black p-2">EC(B/M)00000</td>
              <td className="border border-black p-2">Economics</td>
            </tr>
            <tr>
              <td className="border border-black p-2">FC(B/M)00001</td>
              <td className="border border-black p-2">FC(B/M)00000</td>
              <td className="border border-black p-2">Fiction</td>
            </tr>
            <tr>
              <td className="border border-black p-2">CH(B/M)00001</td>
              <td className="border border-black p-2">CH(B/M)00000</td>
              <td className="border border-black p-2">Children</td>
            </tr>
            <tr>
              <td className="border border-black p-2">PD(B/M)00001</td>
              <td className="border border-black p-2">PD(B/M)00000</td>
              <td className="border border-black p-2">Personal Development</td>
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
            className="bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
