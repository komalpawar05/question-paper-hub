import { FaBars, FaBell, FaSignOutAlt } from "react-icons/fa";

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
  showNotification = true,
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

        {/* Notification */}
        {showNotification && (
          <button className="relative text-gray-600 hover:text-black text-lg flex items-center">
            <FaBell />
            <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
          </button>
        )}

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