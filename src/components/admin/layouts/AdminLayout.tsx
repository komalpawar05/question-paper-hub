import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../layouts/Sidebar";


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
      <div className="flex-1 flex flex-col">

        <main className="flex-1 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;