import { motion } from "framer-motion";
import { ClipboardList, Rocket } from "lucide-react";

import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-[90%] m-auto bg-white text-black min-h-screen flex flex-col items-center justify-center px-4">
        {/* Hero Section */}
        <div className="max-w-6xl w-full grid md:grid-cols-2 items-center text-center gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10">
              Organize Your Work With Ease
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Boost productivity and stay on top of your tasks. Manage everything from personal to team projects effortlessly.
            </p>

            <div className="flex gap-4 justify-center">
              <a href="/signup" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                Get Started
              </a>
              <a href="/login" className="border border-black text-black px-6 py-2 rounded-md hover:bg-gray-100 transition">
                Log In
              </a>
            </div>
          </motion.div>

          {/* Image / Animation */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <img
              src="https://illustrations.popsy.co/gray/work-from-home.svg"
              alt="Task Management Illustration"
              className="w-full max-h-[400px] object-contain"
            />
          </motion.div>
        </div>

        {/* Features */}
        <div className="mt-10 w-full max-w-5xl grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-gray-300 hover:cursor-pointer rounded-xl shadow"
          >
            <ClipboardList className="text-black mb-2" size={32} />
            <h3 className="font-semibold text-xl">Smart Task Tracking</h3>
            <p className="text-gray-600">Track, assign, and complete tasks with simple controls.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-gray-300 hover:cursor-pointer rounded-xl shadow"
          >
            <Rocket className="text-black mb-2" size={32} />
            <h3 className="font-semibold text-xl">Boost Team Efficiency</h3>
            <p className="text-gray-600">Collaborate in real-time with team members effortlessly.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomePage;