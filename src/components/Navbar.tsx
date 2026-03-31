import { FaBars, FaBell } from "react-icons/fa";

type Props = {
  toggleSidebar: () => void;
};

const Navbar: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow p-4">

      {/* Hamburger */}
      <button
        onClick={toggleSidebar}
        className="text-xl md:hidden"
      >
        <FaBars />
      </button>

      <h1 className="font-semibold text-lg">
        Dashboard
      </h1>

      <FaBell />

    </div>
  );
};

export default Navbar;