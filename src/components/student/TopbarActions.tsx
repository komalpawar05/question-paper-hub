import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

function TopbarActions() {
  return (
    <>
     <Link to="/student" className="text-sm font-medium text-gray-600 hover:text-blue-500">
             Home
      </Link>
      <Link
        to="/student/browse"
        className="text-sm font-medium text-gray-600 hover:text-blue-500"
      >
        Browse Papers
      </Link>

      <Link
        to="/student/orders"
        className="text-sm font-medium text-gray-600 hover:text-blue-500"
      >
        My Orders
      </Link>

      <Link
        to="/student/cart"
        className="relative text-gray-600 hover:text-blue-500"
      >
        <FaShoppingCart size={18} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
          0
        </span>
      </Link>

      <Link
        to="/admin/login"
        className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-500"
      >
        <MdAdminPanelSettings size={20} />
        Admin
      </Link>
    </>
  );
}

export default TopbarActions;