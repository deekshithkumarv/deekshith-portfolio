import { useState, useEffect } from "react";
import {  motion } from "framer-motion";
import { testimonials } from "~/data/testimonials";
import profilePhotot from '../../public/assets/images/me.jpg';
import "./style.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

export default function Index() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
     <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
    {/* Navbar Section */}
    <nav className="fixed w-full top-0 left-0 bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center z-10">
      <h1 className="font-burtons text-xl">Deekshith Kumar V</h1>
      <div className="flex space-x-4 items-center">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md transition-all"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-xl" />
          ) : (
            <FaMoon className="text-gray-900 text-xl" />
          )}
        </button>

        {/* Resume Download Button */}
        <a
          href="/assets/DeekshithResume.pdf"
          download="Deekshith_Kumar_Resume.pdf"
          className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="px-10 md:px-20 lg:px-40 min-h-screen flex flex-col items-center justify-center text-center">
      <motion.h2
        className="font-burtons text-5xl md:text-6xl font-medium text-teal-600 dark:text-teal-400 mt-0 md:mt-40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Deekshith Kumar V
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-3xl mt-4"
      >
        Software Engineer
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-md md:text-xl mt-6 max-w-xl"
      >
        Passionate about building scalable and efficient web applications.
      </motion.p>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96"
      >
        <img src={profilePhotot} alt="Profile Image" className="w-full h-full object-cover" />
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex space-x-6 mt-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="https://www.linkedin.com/in/deekshith-kumar-v-44a08321a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-teal-500 hover:text-teal-400" />
        </a>
        <a href="https://github.com/deekshithkumarv" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-teal-500 hover:text-teal-400" />
        </a>
        <a href="mailto:vdeekshithkumar@example.com">
          <FaEnvelope className="text-3xl text-teal-500 hover:text-teal-400" />
        </a>
      </motion.div>
    </div>

    {/* Skills Section */}
    <div className="py-20 px-10 md:px-20 lg:px-40 bg-gray-100 dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-center">Skills</h3>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {["React", "TypeScript", "Tailwind CSS", "Node.js", "ASP .Net"].map((skill, index) => (
          <motion.div key={index} className="px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md" whileHover={{ scale: 1.1 }}>
            {skill}
          </motion.div>
        ))}
      </div>
    </div>

    {/* Projects Section */}
    <div className="py-20 px-10 md:px-20 lg:px-40 bg-gray-200 dark:bg-gray-800">
      <h3 className="text-3xl font-bold text-center">Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {[
          { title: "ERP System for a Manufacturing Firm", description: "This project was aimed at maintaining various head office and branch operations such as manufacturing, purchase, stock transfer, and sales" },
          { title: "Grow-N-Know", description: "This website offers three different services that use machine learning to identify the best crops to produce, the fertilizers to use and potential disease your crops may have contracted." },
          { title: "Messaging app", description: "Messaging app is an android based application. It’s a simple application where the user can send and view messages." },
          { title: "CarWow", description: "CarWow is a web-based application that allows customers to check luxury cars availability, prices, specifications." }
        ].map((project, index) => (
          <motion.div key={index} className="p-6 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md" whileHover={{ scale: 1.05 }}>
            <h4 className="text-xl font-bold">{project.title}</h4>
            <p className="mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Contact Section */}
    <div className="py-20 px-10 md:px-20 lg:px-40 text-center bg-gray-100 dark:bg-gray-900">
      <h3 className="text-3xl font-bold">Get in Touch</h3>
      <p className="mt-4 max-w-xl mx-auto">Feel free to reach out for collaborations or just to connect.</p>
      <a href="mailto:vdeekshithkumar@gmail.com" className="mt-6 inline-block px-6 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600">
        Contact Me
      </a>
    </div>

    {/* Footer Section */}
    <footer className="py-6 text-center bg-gray-200 dark:bg-gray-800">
      &copy; 2025 Deekshith Kumar V. All Rights Reserved.
    </footer>
  </div>
    </div>
  );
}
