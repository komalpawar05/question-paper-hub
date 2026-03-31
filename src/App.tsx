import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/admin/layouts/AdminLayout";
import Dashboard from "./pages/admin/AdminDashboard";
import QuestionPaper from "./pages/admin/QuestionPapers";
import Orders from "./pages/admin/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root to admin dashboard */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>

          {/* Default /admin route */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* Admin Pages */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="question-papers" element={<QuestionPaper />} />
          <Route path="orders" element={<Orders />} />

        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;