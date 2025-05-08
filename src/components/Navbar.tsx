import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
const Navbar = () => {
  const {
    isArabic,
    toggleLanguage
  } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="shadow-sm sticky top-0 z-50 bg-emerald-100">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            {/* Replace SVG with Image Tag */}
            <img src={`${import.meta.env.BASE_URL}Logo.png`} alt="MENA Padel Logo" className="h-10 w-auto" /> {/* Adjust h-10 (height) as needed */}
            {/* The span with text might be redundant if the logo image contains the text, or adjust as needed */}
            <span className="text-xl bg-gradient-to-r from-teal to-court bg-clip-text font-bold text-gray-700 hidden sm:inline"> {/* Optionally hide text on very small screens if logo is enough */}
              {isArabic ? "دليل ملاعب بادل في الشرق الاوسط وشمال افريقيا" : "Directory of Padel Courts in MENA"}
            </span>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-6 mx-4">
              <Link to="/" className="text-gray-700 hover:text-court transition-colors font-medium px-2">
                {isArabic ? "الرئيسية" : "Home"}
              </Link>
              <Link to="/courts" className="text-gray-700 hover:text-court transition-colors font-medium px-2">
                {isArabic ? "الملاعب" : "Courts"}
              </Link>
              <Link to="/courts-near-me" className="text-gray-700 hover:text-court transition-colors font-medium px-2">
                {isArabic ? "الملاعب القريبة" : "Near Me"}
              </Link>
              <Link to="/coaches" className="text-gray-700 hover:text-court transition-colors font-medium px-2">
                {isArabic ? "المدربين" : "Coaches"}
              </Link>
              <Link to="/how-to-play" className="text-gray-700 hover:text-court transition-colors font-medium px-2">
                {isArabic ? "كيف تلعب" : "How to Play"}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-court transition-colors font-medium px-2">
                {isArabic ? "عن البادل" : "About Padel"}
              </Link>
             
             
            </div>

            <Button variant="outline" onClick={toggleLanguage} className="text-court border-court hover:bg-court hover:text-white ml-4">
              {isArabic ? "English" : "العربية"}
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-court transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {isArabic ? "الرئيسية" : "Home"}
              </Link>
              <Link to="/courts" className="text-gray-700 hover:text-court transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {isArabic ? "الملاعب" : "Courts"}
              </Link>
              <Link to="/coaches" className="text-gray-700 hover:text-court transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {isArabic ? "المدربين" : "Coaches"}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-court transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {isArabic ? "عن البادل" : "About Padel"}
              </Link>
              <Link to="/how-to-play" className="text-gray-700 hover:text-court transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {isArabic ? "كيف تلعب" : "How to Play"}
              </Link>
              <Link to="/courts-near-me" className="text-gray-700 hover:text-court transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {isArabic ? "الملاعب القريبة" : "Near Me"}
              </Link>
              <Button onClick={() => {
            toggleLanguage();
            setIsMenuOpen(false);
          }} variant="outline" className="text-court border-court hover:bg-court hover:text-white w-full">
                {isArabic ? "English" : "العربية"}
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;