import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  path: string;
};

const SidebarItem: React.FC<Props> = ({ title, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "block p-3 bg-purple-500 text-white rounded"
          : "block p-3 hover:bg-gray-200 rounded"
      }
    >
      {title}
    </NavLink>
  );
};

export default SidebarItem;