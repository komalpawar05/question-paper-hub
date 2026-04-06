import React from "react";

type Props = {
  value: string;
  label: string;
};

const StatCard: React.FC<Props> = ({ value, label }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold">
        {value}
      </h2>
      <p className="text-sm">{label}</p>
    </div>
  );
};

export default StatCard;