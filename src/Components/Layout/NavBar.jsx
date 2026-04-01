import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MoveRight } from "lucide-react"; // Lucide icons ব্যবহার করলে

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <nav className="w-full flex justify-center">
      <div className="fixed top-5 z-50 w-11/12 lg:w-10/12 flex items-center justify-between border border-gray-300 bg-transparent backdrop-blur-md px-6 lg:px-10 py-2 rounded-full shadow-sm">
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
        <div className="fixed inset-0 z-50 md:hidden flex flex-col items-center justify-center bg-linear-to-b from-[#aad3fe] to-[#fdf3e0] animate-fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={() => setActiveMenu(false)}
            className="absolute top-8 right-8 text-3xl hover:rotate-90 transition-transform duration-300"
          >
            ✕
          </button>

          <ul className="flex flex-col gap-8 font-bold text-3xl text-center">
            {/* প্রতিটি Link-এ hover এবং fade-in এনিমেশন অ্যাড করা হয়েছে */}
            <li className="animate-fade-in-up [animation-delay:100ms]">
              <Link
                onClick={() => setActiveMenu(false)}
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li className="animate-fade-in-up [animation-delay:200ms]">
              <Link
                onClick={() => setActiveMenu(false)}
                to="/journal"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Journal
              </Link>
            </li>
            <li className="animate-fade-in-up [animation-delay:300ms]">
              <Link
                onClick={() => setActiveMenu(false)}
                to="/about"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li className="animate-fade-in-up [animation-delay:400ms]">
              <Link
                onClick={() => setActiveMenu(false)}
                to="/careers"
                className="hover:text-blue-600 transition-colors duration-200"
              >
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
