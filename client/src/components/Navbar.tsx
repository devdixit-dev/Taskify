import { Github, Menu, Twitter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-[90%] m-auto bg-white text-black border-b border-gray-300 rounded-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold">
          Taskify
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="https://github.com/devdixit-dev/Taskify" target="_blank"><Github className="text-gray-600" /></a>
          <a href="https://github.com/devdixit-dev/Taskify" target="_blank"><Twitter className="text-gray-600" /></a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="https://github.com/devdixit-dev/Taskify" target="_blank"><Github className="text-gray-600" /></a>
          <a href="https://github.com/devdixit-dev/Taskify" target="_blank"><Twitter className="text-gray-600" /></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;