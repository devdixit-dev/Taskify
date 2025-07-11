import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-[90%] m-auto bg-white text-black border-b border-gray-300 rounded-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold">
          Taskify
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/dashboard" className="hover:underline">Home</Link>
          <Link to="/tasks" className="hover:underline">Tasks</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/dashboard" className="block">Dashboard</Link>
          <Link to="/tasks" className="block">Tasks</Link>
          <Link to="/profile" className="block">Profile</Link>
          <Link to="/admin" className="block">Admin</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;