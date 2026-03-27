import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Show / Hide scroll button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top click
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AppRoutes />

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollUp}
          className="fixed z-50 bottom-8 right-8 p-3 rounded-full 
          bg-gradient-to-r from-orange-600 to-orange-700
          text-white shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default App;
