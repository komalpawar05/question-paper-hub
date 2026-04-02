import React, { useState } from "react";
import StatCard from "../../components/admin/common/StatCard";
import ActiveState from "../../components/admin/layouts/ActiveState";
import Topbar from "../../components/admin/layouts/Topbar";
import { SlCalender } from "react-icons/sl";
import { RiLoader2Line } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";

const AdminDashboard: React.FC = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ Dynamic card data (best practice)
  const cards = [
    {
      title: "Total Orders",
      value: 120,
      icon: <SlCalender/>,
      bgColor: "bg-blue-500"
    },
    {
      title: "Revenue",
      value: "₹ 2,500",
      icon: < RiLoader2Line/>,
      bgColor: "bg-green-500"
    },
    {
      title: "Students",
      value: 150,
      icon: <FaUserGraduate />,
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <Topbar
          title="Dashboard"
          openSidebar={() => setSidebarOpen(true)}
          onLogout={() => console.log("Logout clicked")}
        />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4">

          {/* ✅ Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <StatCard
                key={index}
                title={card.title}
                value={card.value}
                icon={card.icon}
                bgColor={card.bgColor}
              />
            ))}
          </div>

          {/* Active State Section */}
          <ActiveState />

        </main>

      </div>

    </div>
  );
};

export default AdminDashboard;