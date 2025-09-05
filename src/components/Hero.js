import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-orange-100 to-white pt-20"
    >
      {/* Left Content */}
      <div className="text-center md:text-left md:w-1/2 px-6">
        <p className="text-lg text-gray-600">Hello! 👋</p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          I'm <span className="text-orange-500">Ehtashamul</span>, <br />
          Java Full Stack Developer
        </h1>
   <p className="mt-4 text-black text-lg md:text-xl max-w-xl leading-relaxed">
  I create scalable, high-performance web applications using{" "}
  <span className="text-yellow-500 font-semibold">Java</span>,{" "}
  <span className="text-yellow-500 font-semibold">Spring Boot</span>,{" "}
  <span className="text-yellow-500 font-semibold">Angular</span>,{" "}
    <span className="text-yellow-500 font-semibold">JavaScript</span>,{" "}
  <span className="text-yellow-500 font-semibold">HTML</span>,{" "}
  <span className="text-yellow-500 font-semibold">CSS</span>, and{" "}
  <span className="text-yellow-500 font-semibold">PostgreSQL</span>.  
  Passionate about building clean, efficient, and user-friendly digital experiences.
</p>



        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-orange-500 text-white px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
          >
            Portfolio →
          </a>
          <a
            href="#contact"
            className="border border-orange-500 px-6 py-3 rounded-full text-orange-500 hover:bg-orange-100 transition"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Right Content (Profile Image) */}
  <div className="flex justify-center items-center">
  <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-xl border-4 border-orange-300 animate-float">
  <img
    src="/images/profile.jpg"
    alt="Ehtashamul Haque"
    className="w-full h-full object-cover"
  />
</div>
</div>

    </section>
  );
}

export default Hero;
