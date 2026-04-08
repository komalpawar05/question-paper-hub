import React from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const PageHeader: React.FC<Props> = ({
  title,
  subtitle,
  icon = <FaSearch />,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
          {icon} {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm md:text-base text-blue-100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;