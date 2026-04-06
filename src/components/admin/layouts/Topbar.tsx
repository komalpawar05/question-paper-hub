import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
type Props = {
  title?: string;
  openSidebar: () => void;
  showNotification?: boolean;
  showLogout?: boolean;
  onLogout?: () => void;
};

const Topbar: React.FC<Props> = ({
  title = "Dashboard",
  openSidebar,
  showLogout = true,
  onLogout,
}) => {
  return (
    <header className="flex items-center justify-between bg-white shadow-sm px-6 h-16">

      {/* Left Section */}
      <div className="flex items-center gap-4 h-full">

        {/* Mobile Menu */}
        <button
          onClick={openSidebar}
          className="text-xl md:hidden text-gray-600 hover:text-black flex items-center"
        >
          <FaBars />
        </button>

        {/* Title */}
        <h1 className="text-lg md:text-xl font-semibold text-gray-800 leading-none">
          {title}
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 h-full">
        {/* Student Portal */}

        <a
          href="/student-portal"
          className="text-sm font-medium text-gray-600 hover:text-blue-500 flex items-center gap-1"
        >
          <PiStudentBold size={18} /> Student Portal
        </a>
        {/* admin */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-600">
            A
          </div>
          <span className="hidden md:inline text-sm font-medium text-gray-600">
            Admin
          </span>
        </div>

        {/* Logout */}
        {showLogout && (
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-red-500"
          >
            <FaSignOutAlt />
            <span className="hidden md:inline text-sm font-medium">
              Logout
            </span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Topbar;