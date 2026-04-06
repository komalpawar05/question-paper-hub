import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description?: string;
};

const FeatureCard: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-md transition">
      <div className="text-3xl text-blue-500 mb-3 flex justify-center">{icon}</div>    
      <h3 className="font-semibold text-gray-800">{title}</h3>

      {description && (
        <p className="text-sm text-gray-500 mt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default FeatureCard;