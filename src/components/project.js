import React from "react";

function Projects() {
  const projects = [
    {
      title: "Post Trade Settlement",
      tech: "Java, Spring Boot, Angular, PostgreSQL",
      code: "https://posttrade.ncdfiemarket.com/#/login",
      gradient: "from-orange-400 to-pink-500",
    },
    {
      title: "E-Billing System",
      tech: "Java, Spring Boot, Angular, PostgreSQL",
      code: "https://billing.neml.in/Billing_Utility/",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "PFM - Participant Funds Management",
      tech: "Java, Spring Boot, Angular, PostgreSQL",
      code: "https://market.neml.in/#/",
      gradient: "from-green-400 to-teal-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">💻 Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${proj.gradient}`}></div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mt-2">{proj.tech}</p>
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-orange-500 hover:underline font-medium"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
  