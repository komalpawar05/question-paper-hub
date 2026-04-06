import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../../Topbar";


const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {/* Content */}
  <div className="flex-1 flex flex-col md:ml-64">

    <Topbar
      openSidebar={() => setSidebarOpen(true)}
      isSidebarOpen={sidebarOpen}
      title="Dashboard"
      showLogout
    />

    <main className="flex-1 bg-gray-100 overflow-y-auto">
      <Outlet />
    </main>

  </div>
    </div>
  );
};

export default AdminLayout;