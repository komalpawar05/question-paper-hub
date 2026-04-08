import { FaFileAlt, FaBook, FaCalendar, FaUniversity, FaShoppingCart } from "react-icons/fa";
import type { Paper } from "../../data/papers";

interface PaperCardProps {
  paper: Paper;
  showPopular?: boolean; // ✅ optional
  onAddToCart?: (paper: Paper) => void; // ✅ future-ready
}

const PaperCard: React.FC<PaperCardProps> = ({
  paper,
  showPopular = false,
  onAddToCart,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4">
      
      {/* Icon */}
      <div className="flex items-center justify-center h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl text-white text-3xl mb-4">
        <FaFileAlt />
      </div>

      {/* Content */}
      <div>
        {/* Popular Badge */}
        {showPopular && paper.popular && (
          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded mb-2 inline-block">
            Popular
          </span>
        )}

        <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>

        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span className="flex items-center gap-1">
            <FaBook /> {paper.subject}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendar /> {paper.year}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <FaUniversity /> {paper.university}
          </span>
          <span>{paper.pages} pages</span>
        </div>

        <p className="text-sm text-gray-400 mb-3">
          {paper.description?.slice(0, 80)}...
        </p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-semibold">
            ₹{paper.price}
          </span>

          <button
            onClick={() => onAddToCart?.(paper)} // ✅ safe optional call
            className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            <FaShoppingCart /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaperCard;