import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../components/admin/layouts/AdminLayout";
import Dashboard from "../pages/admin/AdminDashboard";
import QuestionPaper from "../pages/admin/QuestionPapers";
import Orders from "../pages/admin/Orders";
import AdminLogin from "../pages/admin/AdminLogin";

const AppRoutes = () => {
  return (
    <Routes>

      {/* LOGIN (NO SIDEBAR) */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* ADMIN PANEL (WITH SIDEBAR) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="question-papers" element={<QuestionPaper />} />
        <Route path="orders" element={<Orders />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />

    </Routes>
  );
};

export default AppRoutes;