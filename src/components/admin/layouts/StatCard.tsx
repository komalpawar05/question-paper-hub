import {
  FaFileAlt,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign
} from "react-icons/fa";

type Card = {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
};

const DashboardCards: React.FC = () => {

  const cards: Card[] = [
    {
      title: "Total Revenue",
      value: "₹12,500",
      icon: <FaRupeeSign />,
      color: "bg-green-500"
    },
    {
      title: "Orders",
      value: "85",
      icon: <FaShoppingCart />,
      color: "bg-indigo-500"
    },
    {
      title: "Question Papers",
      value: "120",
      icon: <FaFileAlt />,
      color: "bg-purple-500"
    },
    {
      title: "Users",
      value: "240",
      icon: <FaUsers />,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-between"
        >

          <div>
            <p className="text-gray-500 text-sm">{card.title}</p>
            <h2 className="text-2xl font-bold mt-1">{card.value}</h2>
          </div>

          <div className={`text-white p-4 rounded-lg text-xl ${card.color}`}>
            {card.icon}
          </div>

        </div>
      ))}

    </div>
  );
};

export default DashboardCards;