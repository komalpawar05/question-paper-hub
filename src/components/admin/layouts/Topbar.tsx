import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useIsMobile from "../../../hooks/useIsMobile";

type Props = {
  title?: string;
  openSidebar: () => void;
  showLogout?: boolean;
  onLogout?: () => void;
  isSidebarOpen?: boolean; // ✅ NEW
};

const Topbar: React.FC<Props> = ({
  title = "Dashboard",
  openSidebar,
  showLogout = true,
  onLogout,
  isSidebarOpen = false,
}) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    sessionStorage.removeItem("adminUsername");

    toast.success("Logged out successfully");

    if (onLogout) onLogout();

    navigate("/admin/login");
  };

  return (
    <header className="flex items-center justify-between bg-white shadow-sm px-4 md:px-6 h-16">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* Sidebar Toggle (ONLY MOBILE) */}
        {isMobile && !isSidebarOpen && (
          <button
            onClick={openSidebar}
            className="text-xl text-gray-600 hover:text-black"
          >
            <FaBars />
          </button>
        )}

        {/* Title */}
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          {title}
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6">

        {/* Student Portal (hide only on very small screens if needed) */}
        {!isMobile && (
          <button
            onClick={() => navigate("/student-portal")}
            className="text-sm font-medium text-gray-600 hover:text-blue-500 flex items-center gap-1"
          >
            <PiStudentBold size={18} /> Student Portal
          </button>
        )}

        {/* Admin Info */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold">
            A
          </div>

          {/* Hide name on mobile */}
          {!isMobile && (
            <span className="text-sm font-medium text-gray-700">
              Admin
            </span>
          )}
        </div>

        {/* Logout */}
        {showLogout && (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition"
          >
            <FaSignOutAlt />

            {/* Hide text on mobile */}
            {!isMobile && (
              <span className="text-sm font-medium">
                Logout
              </span>
            )}
          </button>
        )}
      </div>
    </header>
  );
};

export default Topbar;