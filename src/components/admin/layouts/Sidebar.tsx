import {
  FaTachometerAlt,
  FaFileAlt,
  FaShoppingCart,
  FaSignOutAlt,
  FaTimes
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";
import toast from "react-hot-toast";

type Props = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const Sidebar: React.FC<Props> = ({ isOpen, closeSidebar }) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition
     ${isActive ? "bg-indigo-500" : "hover:bg-indigo-500"}`;

  const handleLogout = () => {
    sessionStorage.clear();
    toast.success("Logged out");
    navigate("/admin/login");
  };

  return (
    <>
      {/* ✅ Overlay (Mobile only) */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* ✅ Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-64
          bg-gradient-to-b from-indigo-600 to-indigo-800
          text-white flex flex-col
          transition-transform duration-300

          ${isMobile
            ? isOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : "translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-indigo-500">
          <h1 className="text-xl font-bold">ExamHub</h1>

          {isMobile && (
            <button onClick={closeSidebar} className="text-lg">
              <FaTimes />
            </button>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavLink
            to="/admin/dashboard"
            onClick={isMobile ? closeSidebar : undefined}
            className={linkStyle}
          >
            <FaTachometerAlt />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/question-papers"
            onClick={isMobile ? closeSidebar : undefined}
            className={linkStyle}
          >
            <FaFileAlt />
            Question Papers
          </NavLink>

          <NavLink
            to="/admin/orders"
            onClick={isMobile ? closeSidebar : undefined}
            className={linkStyle}
          >
            <FaShoppingCart />
            Orders
          </NavLink>
        </nav>

        {/* Footer (Logout fixed properly) */}
        <div className="p-4 border-t border-indigo-500">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-indigo-500 transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;