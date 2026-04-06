import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  role: string;
  message: string;
  rating?: number;
};

const TestimonialCard: React.FC<Props> = ({
  name,
  role,
  message,
  rating = 5,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

      {/* Stars */}
      <div className="flex text-yellow-400 text-lg mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Message */}
      <p className="text-gray-600 text-sm leading-relaxed">
        "{message}"
      </p>

      {/* Name */}
      <div className="mt-4 font-semibold text-gray-800 text-sm">
        - {name}, {role}
      </div>
    </div>
  );
};

export default TestimonialCard;