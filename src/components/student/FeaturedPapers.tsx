import PaperCard from "./PaperCard";
import { Link } from "react-router-dom";

// ✅ Reusable type (move later to /types if needed)
export interface Paper {
  id: string;
  title: string;
  subject: string;
  year: number; // ✅ fixed
  university: string;
  pages: number;
  description: string;
  price: number;
  popular: boolean;
}

interface FeaturedPapersProps {
  papers: Paper[];
}

const FeaturedPapers: React.FC<FeaturedPapersProps> = ({ papers }) => {
  const featured = papers?.filter(p => p.popular).slice(0, 6);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl font-bold text-center mb-6">
          Featured Question Papers
        </h2>

        {/* ✅ Empty State */}
        {featured.length === 0 ? (
          <p className="text-center text-gray-400">
            No featured papers available
          </p>
        ) : (
          <div className="grid md:grid-cols-4 gap-6">
            {featured.map((paper) => (
              <PaperCard
                key={paper.id}
                paper={paper}
                showPopular={true}
              />
            ))}
          </div>
        )}

        {/* ✅ React Router Link */}
        <div className="text-center mt-6">
          <Link
            to="/student/browse"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            View All Papers →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPapers;