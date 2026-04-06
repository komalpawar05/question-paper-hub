import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useIsMobile from "../hooks/useIsMobile";

type Props = {
  title?: string;
  openSidebar?: () => void;     // optional now
  showSidebarToggle?: boolean;  // control toggle
  showLogout?: boolean;
  showStudentBtn?: boolean;     // NEW
  rightContent?: React.ReactNode; // NEW (for reuse)
  onLogout?: () => void;
  isSidebarOpen?: boolean;
};

const Topbar: React.FC<Props> = ({
  title = "Dashboard",
  openSidebar,
  showSidebarToggle = false,
  showLogout = false,
  showStudentBtn = false,
  rightContent,
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

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* Sidebar Toggle */}
        {showSidebarToggle && isMobile && !isSidebarOpen && (
          <button
            onClick={openSidebar}
            className="text-xl text-gray-600 hover:text-black"
          >
            <FaBars />
          </button>
        )}

        {/* Title / Logo */}
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          {title}
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 md:gap-6">

        {/* Custom Right Content (for reuse) */}
        {rightContent}

        {/* Student Portal Button */}
        {showStudentBtn && !isMobile && (
          <button
            onClick={() => navigate("/student-portal")}
            className="text-sm font-medium text-gray-600 hover:text-blue-500 flex items-center gap-1"
          >
            <PiStudentBold size={18} /> Student Portal
          </button>
        )}

        {/* Admin Info */}
        {showLogout && (
          <>
          <button onClick={() => navigate("/student-portal")} className="text-sm font-medium text-gray-600 hover:text-blue-500 flex items-center gap-1" > <PiStudentBold size={18} /> Student Portal </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold">
                A
              </div>

              {!isMobile && (
                <span className="text-sm font-medium text-gray-700">
                  Admin
                </span>
              )}
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition"
            >
              <FaSignOutAlt />
              {!isMobile && <span className="text-sm">Logout</span>}
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Topbar;