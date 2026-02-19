import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  const products = [
    { from: "SC(B/M)00001", to: "SC(B/M)00000", category: "Science" },
    { from: "EC(B/M)00001", to: "EC(B/M)00000", category: "Economics" },
    { from: "FC(B/M)00001", to: "FC(B/M)00000", category: "Fiction" },
    { from: "CH(B/M)00001", to: "CH(B/M)00000", category: "Children" },
    { from: "PD(B/M)00001", to: "PD(B/M)00000", category: "Personal Development" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate("/chart")}
          className="text-blue-600 hover:underline"
        >
          Chart
        </button>

        <h1 className="text-2xl font-semibold">
          Admin Home Page
        </h1>

        <button
          onClick={() => navigate("/")}
          className="text-blue-600 hover:underline"
        >
          Back
        </button>
      </div>

      {/* Menu */}
      <div className="flex gap-10 font-semibold mb-6">
        <button className="hover:text-blue-600">Maintenance</button>
        <button className="hover:text-blue-600">Reports</button>
        <button className="hover:text-blue-600">Transactions</button>
      </div>

      {/* Product Details Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Product Details
        </h2>

        <table className="w-full border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Code No From</th>
              <th className="border p-2">Code No To</th>
              <th className="border p-2">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{item.from}</td>
                <td className="border p-2">{item.to}</td>
                <td className="border p-2">{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>

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

export default AdminHome;