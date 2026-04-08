import { useState } from "react";
import PaperCard from "../../components/student/PaperCard";
import papers, { type Paper } from "../../data/papers";
import TopbarActions from "../../components/student/TopbarActions";
import Topbar from "../../components/Topbar";
import PageHeader from "../../components/student/PageHeader";
import { FaSearch } from "react-icons/fa";

interface BrowseProps {
  papers: Paper[];
}

const Browse: React.FC<BrowseProps> = ({ papers }) => {
  const [search, setSearch] = useState("");

  const filtered = papers.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
        <Topbar
          title="QuestionHub"
          rightContent={<TopbarActions />}
        />
           <PageHeader
            title="Browse Question Papers"
            subtitle="Find the perfect question papers for your exam preparation"
            icon={<FaSearch />}
          />
        <div className="max-w-6xl mx-auto px-4 py-10">
       
          {/* Search */}
          <input
            type="text"
            placeholder="Search papers..."
            className="w-full border p-2 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-4 gap-6">
              {filtered.map((paper) => (
                <PaperCard
                  key={paper.id}
                  paper={paper}
                  showPopular={true}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 mt-10">
              No papers found
            </p>
          )}
        </div>
    </div>
  );
};

export default Browse;