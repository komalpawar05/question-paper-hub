import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../components/admin/layouts/AdminLayout";
import Dashboard from "../pages/admin/AdminDashboard";
import QuestionPaper from "../pages/admin/QuestionPapers";
import Orders from "../pages/admin/Orders";
import AdminLogin from "../pages/admin/AdminLogin";
import StudentHome from "../pages/student/StudentHome";
import Browse from "../pages/student/Browse";
import papers from "../data/papers";
import Cart from "../pages/student/Cart";
import StudentsOrders from "../pages/student/Orders";
import NotFound from "../pages/admin/NotFound404";

const AppRoutes = () => {
  return (
    <Routes>

      {/* DEFAULT ROUTE → STUDENT */}
      <Route path="/" element={<Navigate to="/student" replace />} />

      {/* ADMIN LOGIN */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* ADMIN PANEL */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        {/* Need Add login page here  */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="question-papers" element={<QuestionPaper />} />
        <Route path="orders" element={<Orders />} />
      </Route>

      {/* STUDENT */}
      <Route
        path="/student"
        element={<StudentHome />}
      />

      <Route
        path="/student/browse"
        element={<Browse papers={papers} />}
      />
      <Route
        path="/student/cart"
        element={<Cart />} />
         
         <Route
        path="/student/orders"
        element={<StudentsOrders />} />

      {/* 404 */}
      <Route path="*" element={<NotFound/>} />

    </Routes>
  );
};

export default AppRoutes;