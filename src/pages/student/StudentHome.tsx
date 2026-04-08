import { Link } from "react-router-dom";
import {
  FaSearch,
  FaStar,
  FaCheckCircle,
  FaDownload,
  FaShieldAlt,
  FaShoppingCart,
  FaCalculator,
  FaAtom,
  FaFlask,
  FaLaptopCode,
  FaDna,
  FaBook,
  FaLandmark,
  FaChartLine,
  FaRocket
} from "react-icons/fa";

import Topbar from "../../components/Topbar";
import FeatureCard from "../../components/student/FeatureCard";
import CategoryCard from "../../components/student/CategoryCard";
import StatCard from "../../components/student/StatCard";
import Footer from "../../components/student/Footer";
import Testimonials from "../../components/student/Testimonials";
import FeaturedPapers from "../../components/student/FeaturedPapers";
import type { Paper } from "../../data/papers";
import papers from "../../data/papers";
import TopbarActions from "../../components/student/TopbarActions";

interface StudentHomeProps {
  papers: Paper[];
}
const StudentHome = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ✅ Reusable Topbar */}
             <Topbar
          title="QuestionHub"
          rightContent={<TopbarActions />}
        />

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Your Source for Quality Question Papers
        </h1>

        <p className="max-w-xl mx-auto mb-6 text-sm md:text-base">
          Access thousands of previous year question papers. Prepare smarter, score better!
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/browse"
            className="bg-white text-blue-600 px-5 py-2 rounded-lg flex items-center gap-2"
          >
            <FaSearch /> Browse Papers
          </Link>

          <a
            href="#featured"
            className="border border-white px-5 py-2 rounded-lg flex items-center gap-2"
          >
            <FaStar /> Featured
          </a>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-6">
          Why Choose QuestionHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<FaCheckCircle />}
            title="Verified Papers"
            description="All question papers are verified from official sources."
          />
          <FeatureCard
            icon={<FaDownload />}
            title="Instant Download"
            description="Download immediately after payment."
          />
          <FeatureCard
            icon={<FaShieldAlt />}
            title="Secure Payment"
            description="Safe and secure payment gateway."
          />
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-6">
          Browse by Subject
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CategoryCard icon={<FaCalculator />} name="Mathematics" />
          <CategoryCard icon={<FaAtom />} name="Physics" />
          <CategoryCard icon={<FaFlask />} name="Chemistry" />
          <CategoryCard icon={<FaLaptopCode />} name="Computer Science" />
          <CategoryCard icon={<FaDna />} name="Biology" />
          <CategoryCard icon={<FaBook />} name="English" />
          <CategoryCard icon={<FaLandmark />} name="History" />
          <CategoryCard icon={<FaChartLine />} name="Economics" />
        </div>
      </section>
      <FeaturedPapers papers={papers} />

      {/* ================= STATS ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value="1500+" label="Papers" />
          <StatCard value="50+" label="Universities" />
          <StatCard value="10K+" label="Students" />
          <StatCard value="4.8/5" label="Rating" />
        </div>
      </section>
     <Testimonials />
      {/* ================= CTA ================= */}
      <section className="py-12 flex flex-col items-center text-center px-4 bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-3">
          Ready to Start Preparing?
        </h2>

        <p className="text-gray-500 mb-6 text-sm md:text-base">
          Join thousands of students preparing smarter with QuestionHub
        </p>

        <Link
          to="/browse"
          className=" flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
            <FaRocket size={20} />
          Get Started Now
        </Link>
      </section>
      {/* ================= Footer Section ================= */}
       <Footer />
    </div>
  );
};

export default StudentHome;