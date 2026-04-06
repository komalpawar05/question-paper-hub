import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-semibold flex items-center gap-2 mb-3">
            <FaGraduationCap /> QuestionHub
          </h3>

          <p className="text-sm text-gray-400">
            Your trusted source for authentic question papers from top universities.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/browse" className="hover:text-white">Browse Papers</Link></li>
            <li><Link to="/orders" className="hover:text-white">My Orders</Link></li>
            <li><Link to="#" className="hover:text-white">About Us</Link></li>
            <li><Link to="#" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/browse?subject=Mathematics" className="hover:text-white">Mathematics</Link></li>
            <li><Link to="/browse?subject=Physics" className="hover:text-white">Physics</Link></li>
            <li><Link to="/browse?subject=Chemistry" className="hover:text-white">Chemistry</Link></li>
            <li><Link to="/browse?subject=Computer Science" className="hover:text-white">Computer Science</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-white">Refund Policy</Link></li>
            <li><Link to="#" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 QuestionHub. All rights reserved.{" "}
        <span className="font-semibold text-gray-300">
          Demo Prototype - No real transactions
        </span>
      </div>

    </footer>
  );
};

export default Footer;