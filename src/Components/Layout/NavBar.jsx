import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MoveRight } from "lucide-react"; // Lucide icons ব্যবহার করলে

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <nav className="w-full flex justify-center mt-5">
      <div className="fixed top-5 z-50 w-11/12 lg:w-10/12 flex items-center justify-between border border-gray-300 bg-white/80 backdrop-blur-md px-6 lg:px-10 py-2 rounded-full shadow-sm">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          Aetherfield
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 font-medium text-sm lg:text-base">
            <li>
              <Link title="Home" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link title="Journal" to="/j">
                Journal
              </Link>
            </li>
            <li>
              <Link title="About" to="/a">
                About
              </Link>
            </li>
            <li>
              <Link title="Careers" to="/c">
                Careers
              </Link>
            </li>
          </ul>

          <button className="btn bg-black text-white px-6 py-6 rounded-full flex items-center gap-2 text-sm font-semibold cursor-pointer">
            Get Started <MoveRight size={18} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setActiveMenu(!activeMenu)}>
            {activeMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Down */}
      {activeMenu && (
        <div className="fixed top-24 left-4 right-4 bg-white border border-gray-200 rounded-2xl p-6 z-40 md:hidden shadow-xl">
          <ul className="flex flex-col gap-4 font-semibold text-lg">
            <li>
              <Link onClick={() => setActiveMenu(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setActiveMenu(false)} to="/journal">
                Journal
              </Link>
            </li>
            <li>
              <Link onClick={() => setActiveMenu(false)} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setActiveMenu(false)} to="/careers">
                Careers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
