import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Center - Copyright */}
        <p className="text-sm mb-4">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-orange-500">Ehtashamul Haque</span>
        </p>

        {/* Center - Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Ehtasham09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/ehtashamul-h"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-orange-500 transition"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
