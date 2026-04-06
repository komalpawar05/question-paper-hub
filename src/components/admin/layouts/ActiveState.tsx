import {
  FaChartLine,
  FaCalendarAlt,
  FaClipboardList,
  FaUserGraduate
} from "react-icons/fa";

type Card = {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  cardBg: string;
};

const DashboardCards: React.FC = () => {
  const cards: Card[] = [
    {
      title: "Today's Sales",
      value: "₹12,500",
      icon: <FaChartLine />,
      color: "text-green-700",
      bg: "bg-white/60",
      cardBg: "bg-gradient-to-br from-green-100 to-green-50"
    },
    {
      title: "This Month",
      value: "85",
      icon: <FaCalendarAlt />,
      color: "text-indigo-700",
      bg: "bg-white/60",
      cardBg: "bg-gradient-to-br from-indigo-100 to-indigo-50"
    },
    {
      title: "Active Papers",
      value: "120",
      icon: <FaClipboardList />,
      color: "text-purple-700",
      bg: "bg-white/60",
      cardBg: "bg-gradient-to-br from-purple-100 to-purple-50"
    },
    {
      title: "Total Students",
      value: "240",
      icon: <FaUserGraduate />,
      color: "text-orange-700",
      bg: "bg-white/60",
      cardBg: "bg-gradient-to-br from-orange-100 to-orange-50"
    }
  ];

  return (
    <div className="grid grid-cols-1">
      {/* LEFT SIDE (Parent Card) */}
      <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-md border border-gray-100">

        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Active Stats
        </h2>

        {/* Child Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex items-center justify-between p-5 ${card.cardBg} rounded-2xl border border-white/40 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer transition-all duration-300`}
            >
              {/* Text */}
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  {card.title}
                </p>
                <h3 className={`text-xl font-bold ${card.color}`}>
                  {card.value}
                </h3>
              </div>

              {/* Icon */}
              <div
                className={`p-3 rounded-xl ${card.bg} ${card.color} text-xl shadow`}
              >
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DashboardCards;