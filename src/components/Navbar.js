import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg z-50 transform transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide font-['Playfair_Display'] text-white">
          <span className="text-yellow-300">E</span>htasham
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white font-['Poppins'] text-lg">
          {navItems.map((item) => (
            <li key={item.id} className="group">
              <a
                href={`#${item.id}`}
                className="relative px-2 py-1 transition duration-300 hover:text-yellow-300"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-6 py-4">
          <ul className="flex flex-col space-y-4 text-white font-['Poppins'] text-lg">
            {navItems.map((item) => (
              <li key={item.id} className="group">
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="relative px-2 py-1 transition duration-300 hover:text-yellow-300"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
