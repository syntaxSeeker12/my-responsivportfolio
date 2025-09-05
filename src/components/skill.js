import React from "react";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaBug,
  FaCodeBranch,
  FaCloud,
  FaDatabase,
  FaCubes,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiAngular,
  SiGit,
  SiSubversion,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava size={40} className="text-orange-600" /> },
    { name: "Spring Boot", icon: <SiSpringboot size={40} className="text-green-600" /> },
    { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} className="text-indigo-600" /> },
    { name: "Angular", icon: <SiAngular size={40} className="text-red-500" /> },
    { name: "Docker", icon: <FaDocker size={40} className="text-blue-700" /> },

    // New Skills
    { name: "REST API", icon: <FaCloud size={40} className="text-teal-500" /> },
    { name: "Debugging", icon: <FaBug size={40} className="text-red-600" /> },
    { name: "Git", icon: <SiGit size={40} className="text-orange-500" /> },
    { name: "SVN", icon: <SiSubversion size={40} className="text-blue-500" /> },
    { name: "Version Control", icon: <FaCodeBranch size={40} className="text-purple-600" /> },

    // Extra Tech
    { name: "Hibernate", icon: <FaDatabase size={40} className="text-yellow-600" /> },
    { name: "JDBC", icon: <FaDatabase size={40} className="text-green-500" /> },
    { name: "Microservices", icon: <FaCubes size={40} className="text-pink-600" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
          🛠 My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
