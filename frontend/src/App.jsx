import { Routes, Route } from "react-router-dom";
import Login from "./pages/Main";
import AdminLoginPage from "./pages/AdminLoginPage";
import UserLoginPage from "./pages/UserLoginPage";
import AdminHome from "./pages/AdminHome";
import UserHome from "./pages/UserPage";
import IssueBook from "./pages/IssueBook";
import ReturnBook from "./pages/ReturnBook";
import UserReports from "./pages/UserReports";
import TransactionsPage from "./pages/TransactionsPage";
import BookAvailability from "./pages/BookAvailability";
import BookSearchResult from "./pages/BookSearchResult";
import FinePayment from "./pages/FinePayment";
import ProtectedRoute from "./components/ProtectedRoute";
import Maintenance from "./pages/Maintenance";

function App() {
  return (
    <Routes>
      {/* Main selection page */}
      <Route path="/" element={<Login />} />

      {/* Login Pages */}
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/user-login" element={<UserLoginPage />} />

      {/* Dashboards */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user"
        element={
          <ProtectedRoute role="user">
            <UserHome />
          </ProtectedRoute>
        }
      />

      {/* User Actions */}
      <Route path="/issue/:id" element={<IssueBook />} />

      <Route path="/reports" element={<UserReports />} />

      {/* Transaction */}
      <Route path="/transactions" element={<TransactionsPage />} />

      {/* Book Available */}
      <Route path="/books" element={<BookAvailability />} />

      <Route path="/search-result" element={<BookSearchResult />} />

      <Route
        path="/return-book"
        element={
          <ProtectedRoute role="user">
            <ReturnBook />
          </ProtectedRoute>
        }
      />

      <Route path="/fine-payment" element={<FinePayment />} />

      <Route
        path="/maintenance"
        element={
          <ProtectedRoute role="admin">
            <Maintenance />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
