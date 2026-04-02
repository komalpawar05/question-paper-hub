import React, { useState } from "react";
import Topbar from "../../components/admin/layouts/Topbar";
import StatCard from "../../components/admin/common/StatCard";
import SearchFilter from "../../components/admin/common/GlobalFilter";
import Table from "../../components/admin/table/tablelayout";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RiLoader2Line } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";



const Orders: React.FC = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ Dynamic card data
  const cards = [
    {
      title: "Completed",
      value: 10,
      icon: <IoCheckmarkDoneCircle />,
      bgColor: "bg-blue-500"
    },
    {
      title: "Pending",
      value: "₹ 2,500",
      icon: <RiLoader2Line />,
      bgColor: "bg-green-500"
    },
    {
      title: "Total Revenue",
      value: 150,
      icon: <FaChartPie />,
      bgColor: "bg-purple-500"
    },
    {
      title: "Today's Orders",
      value: 150,
      icon: <SlCalender />,
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">

      {/* Topbar */}
      <Topbar
        title="Orders Management"
        openSidebar={() => setSidebarOpen(true)}
      />

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
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

      </div>
      <SearchFilter 
      showAddButton={false}/>
      <div className="p-4">
           <Table title="All Orders" data={[]} columns={[]} />
      </div>
     

    </div>
  );
};

export default Orders;