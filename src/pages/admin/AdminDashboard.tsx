import DashboardCards from "../../components/admin/layouts/StatCard";
import ActiveState from "../../components/admin/layouts/ActiveState";
import Topbar from "../../components/admin/layouts/Topbar";

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
         <Topbar
          title="Dashboard"
          openSidebar={() => setSidebarOpen(true)}
          onLogout={() => console.log("Logout clicked")}
        />
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">

          {/* Stats Cards */}
          <DashboardCards />

          {/* Active State Section */}
          <div className="mt-6">
            <ActiveState />
          </div>

        </main>

      </div>

    </div>
  );
};

export default AdminDashboard;