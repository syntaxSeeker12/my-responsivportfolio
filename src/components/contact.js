import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xeolpnvd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        alert("❌ Failed to send message, please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Form */}
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-6 rounded-2xl shadow-lg text-white flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaEnvelope className="text-white mr-2" /> Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col flex-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-xl mb-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white shadow-sm hover:shadow-md transition duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-xl mb-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white shadow-sm hover:shadow-md transition duration-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-xl mb-4 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white shadow-sm hover:shadow-md transition duration-300 flex-1"
              required
            />
            <button
              type="submit"
              className={`w-full text-orange-500 font-bold py-2 rounded-xl shadow-md transform hover:scale-[1.02] hover:bg-gray-100 transition duration-300 mt-auto ${
                isSubmitting ? "bg-gray-200 cursor-not-allowed" : "bg-white"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "🚀 Send Message"}
            </button>
          </form>
        </div>

        {/* Right: Social + Map */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full h-full p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Or Connect With Me</h3>
            <div className="flex justify-center space-x-4 mb-3">
              <a
                href="mailto:haq.ehtasham09@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white text-lg shadow-md hover:scale-110 transition"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:+919565598604"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white text-lg shadow-md hover:scale-110 transition"
              >
                <FaPhone />
              </a>
              <a
                href="https://linkedin.com/in/ehtashamul"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white text-lg shadow-md hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/syntaxSeeker12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-lg shadow-md hover:scale-110 transition"
              >
                <FaGithub />
              </a>
            </div>

            {/* Map */}
            <div className="w-full h-36 rounded-lg overflow-hidden shadow-inner mt-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6139946959174!2d72.88295107373665!3d19.08070185182779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c888cbf1969d%3A0x8072e821a532fbe!2sBuilding%20Number%208%2C%20Kohinoor%20City%20Phase%201%20Rd%2C%20Christian%20Gaon%2C%20Kurla%2C%20Mumbai%2C%20Maharashtra%20400070!5e0!3m2!1sen!2sin!4v1757071525896!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
