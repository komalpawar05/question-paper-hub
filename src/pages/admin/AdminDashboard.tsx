import StatCard from "../../components/admin/common/StatCard";
import ActiveState from "../../components/admin/layouts/ActiveState";
import { SlCalender } from "react-icons/sl";
import { RiLoader2Line } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";

const AdminDashboard: React.FC = () => {

  const cards = [
    {
      title: "Total Orders",
      value: 120,
      icon: <SlCalender />,
      bgColor: "bg-blue-500"
    },
    {
      title: "Revenue",
      value: "₹ 2,500",
      icon: <RiLoader2Line />,
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
    <div className="p-4 md:p-6 space-y-6">

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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

      {/* Active State */}
      <ActiveState />

    </div>
  );
};

export default AdminDashboard;