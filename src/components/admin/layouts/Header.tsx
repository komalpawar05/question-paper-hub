import { FaBell, FaSignOutAlt } from "react-icons/fa";

type HeaderProps = {
  title: string;
  showNotification?: boolean;
  showLogout?: boolean;
  notificationCount?: number;
  onLogout?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  title,
  showNotification = false,
  showLogout = false,
  notificationCount = 0,
  onLogout,
}) => {
  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 shadow-sm">
      
      {/* Page Title */}
      <h1 className="text-xl font-semibold text-gray-700">
        {title}
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        {showNotification && (
          <div className="relative cursor-pointer">
            <FaBell className="text-xl text-gray-600 hover:text-indigo-600 transition" />

            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full leading-none">
                {notificationCount}
              </span>
            )}
          </div>
        )}

        {/* Logout */}
        {showLogout && (
          <button
            type="button"
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        )}

      </div>
    </header>
  );
};

export default Header;