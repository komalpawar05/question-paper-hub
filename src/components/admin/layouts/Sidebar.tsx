import {
  FaTachometerAlt,
  FaFileAlt,
  FaShoppingCart,
  FaSignOutAlt,
  FaTimes
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const Sidebar: React.FC<Props> = ({ isOpen, closeSidebar }) => {

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 p-3 rounded-lg transition
    ${isActive ? "bg-indigo-500" : "hover:bg-indigo-500"}`;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`
        fixed md:static top-0 left-0 z-50
        h-screen w-64
        bg-gradient-to-b from-indigo-600 to-indigo-800
        text-white
        transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        transition-transform duration-300
        shadow-xl
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-indigo-500">
          <h1 className="text-xl font-bold">ExamHub</h1>

          <button onClick={closeSidebar} className="text-xl md:hidden">
            <FaTimes />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-3">

          <NavLink
            to="/admin/dashboard"
            onClick={closeSidebar}
            className={linkStyle}
          >
            <FaTachometerAlt />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/question-papers"
            onClick={closeSidebar}
            className={linkStyle}
          >
            <FaFileAlt />
            Question Papers
          </NavLink>

          <NavLink
            to="/admin/orders"
            onClick={closeSidebar}
            className={linkStyle}
          >
            <FaShoppingCart />
            Orders
          </NavLink>

        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 w-full p-4 border-t border-indigo-500">
          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-indigo-500 transition">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;