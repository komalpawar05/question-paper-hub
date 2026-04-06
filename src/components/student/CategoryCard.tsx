import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  icon: React.ReactNode;
  name: string;
};

const CategoryCard: React.FC<Props> = ({ icon, name }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/browse?subject=${name}`)}
      className="bg-white p-4 rounded-xl shadow text-center cursor-pointer hover:shadow-md transition"
    >
      <div className="text-2xl text-blue-500 mb-2 flex justify-center">
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
};

export default CategoryCard;