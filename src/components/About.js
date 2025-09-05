import React from "react";

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
          👨‍💻 About Me
        </h2>

        {/* Introduction */}
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-4">
          Hi, I'm{" "}
          <span className="font-bold text-orange-600">Ehtashamul Haque</span>, a
          passionate{" "}
          <span className="font-semibold text-gray-900">
            Java Full Stack Developer
          </span>{" "}
          with expertise in building{" "}
          <span className="text-orange-600 font-medium">
            scalable web applications
          </span>{" "}
          using Java, Spring Boot, Angular, and PostgreSQL.
        </p>

        <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl">
          I enjoy working on both{" "}
          <strong className="text-gray-900">frontend</strong> and{" "}
          <strong className="text-gray-900">backend</strong> development —
          crafting seamless user experiences while designing{" "}
          <span className="text-orange-600 font-medium">
            robust and efficient APIs
          </span>
          . I’m constantly exploring new technologies to stay up to date and
          deliver impactful projects.
        </p>

        {/* Job Experience */}
        <div className="mb-6 max-w-3xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            💼 Experience
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold text-gray-900">Post Trade Settlement Project:</span> Developed end-to-end solutions using Java, Spring Boot, Angular, and PostgreSQL.
            </li>
            <li>
              <span className="font-semibold text-gray-900">E-Billing System:</span> Built a scalable billing platform with integrated backend APIs and responsive frontend UI.
            </li>
            <li>
              <span className="font-semibold text-gray-900">PFM - Participant Funds Management:</span> Designed and implemented robust API services for financial data management.
            </li>
          </ul>
        </div>

        {/* Skills Badges */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium shadow-sm">
            Java
          </span>
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium shadow-sm">
            Spring Boot
          </span>
          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium shadow-sm">
            JavaScript
          </span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium shadow-sm">
            PostgreSQL
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium shadow-sm">
            Angular
          </span>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"          // Place resume.pdf inside the public folder
          download="Ehtashamul_Resume.pdf"
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition inline-flex items-center gap-2"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}

export default About;
