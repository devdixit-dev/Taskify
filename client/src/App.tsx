import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import UserProfile from "./pages/UserProfile";
import UserTasks from "./pages/UserTasks";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <>
      
      <Router>
        <Routes>
          {/* Auth */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* User */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/tasks" element={<UserTasks />} />
          <Route path="/profile" element={<UserProfile />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Fallback */}
          <Route path="*" element={<h1 className="p-4 text-center">404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;