import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FinePayment = () => {
  const navigate = useNavigate();

  // Auto populated demo data
  const bookName = "Science";
  const author = "Author Name";
  const serialNo = "1001";
  const issueDate = "2026-02-15";
  const returnDate = "2026-03-10"; // Late return example

  // Fine Calculation (₹10 per late day)
  const expectedReturnDate = new Date("2026-03-02");
  const actualReturnDate = new Date(returnDate);

  const lateDays =
    actualReturnDate > expectedReturnDate
      ? Math.ceil(
          (actualReturnDate - expectedReturnDate) / (1000 * 60 * 60 * 24),
        )
      : 0;

  const fineAmount = lateDays * 10;

  const [finePaid, setFinePaid] = useState(false);
  const [remarks, setRemarks] = useState("");

  const handleConfirm = () => {
    if (fineAmount > 0 && !finePaid) {
      alert("Please select Fine Paid before completing transaction");
      return;
    }

    alert("Return Transaction Completed Successfully");
    navigate("/user");
  };

  const handleCancel = () => {
    navigate("/transactions");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-semibold mb-6 text-center">Fine Payment</h1>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        {/* Auto Populated Fields */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Book Name:</span>
            <span>{bookName}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Author:</span>
            <span>{author}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Serial No:</span>
            <span>{serialNo}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Issue Date:</span>
            <span>{issueDate}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Return Date:</span>
            <span>{returnDate}</span>
          </div>

          <div className="flex justify-between text-red-600 font-semibold">
            <span>Fine Amount:</span>
            <span>₹ {fineAmount}</span>
          </div>
        </div>

        {/* Editable Fields */}
        <div className="mt-6 space-y-4">
          {fineAmount > 0 && (
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={finePaid}
                onChange={() => setFinePaid(!finePaid)}
              />
              <label>Fine Paid</label>
            </div>
          )}

          <div>
            <label className="block font-medium mb-1">Remarks</label>
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleCancel}
            className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinePayment;
