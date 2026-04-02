import React from "react";

type Props = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
  textColor?: string;
};

const StatCard: React.FC<Props> = ({
  title,
  value,
  icon,
  bgColor = "bg-blue-500",
  textColor = "text-gray-800"
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-between">

      {/* Left Content */}
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className={`text-2xl font-bold mt-1 ${textColor}`}>
          {value}
        </h2>
      </div>

      {/* Icon */}
      <div className={`text-white p-4 rounded-xl text-xl ${bgColor}`}>
        {icon}
      </div>

    </div>
  );
};

export default StatCard;