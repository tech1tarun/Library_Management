import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminLoginPage";
import UserPage from "./pages/UserPage";
import Login from "./pages/Main";
import AdminHome from "./pages/AdminHome";
import UserLoginPage from "./pages/UserLoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/userlogin" element={<UserLoginPage />} />
      <Route path="/admin-home" element={<AdminHome />} />
    </Routes>
  );
}

export default App;
