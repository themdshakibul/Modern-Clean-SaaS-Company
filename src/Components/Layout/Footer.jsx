import FooterImage from "../../assets/Footer-image.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <footer className="bg-yellow-300 text-black overflow-hidden mt-20">
      {/* Top Menu */}
      <div
        data-aos="fade-down"
        className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-6"
      >
        <div className="flex flex-wrap justify-center md:justify-start gap-5 text-lg font-mediumn opacity-90">
          <Link title="Home" to="/">
            Home
          </Link>
          <Link title="Journal" to="/j">
            Journal
          </Link>
          <Link title="About" to="/a">
            About
          </Link>
          <Link title="Careers" to="/c">
            Careers
          </Link>
        </div>

        <p className="text-xl text-center fonts-Source opacity-80">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>

      {/* Image Section */}
      <div data-aos="zoom-in" className="px-4 py-6">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={FooterImage}
            alt="Footer Image"
            className="w-full max-h-75 object-cover opacity-70"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-yellow-400/30"></div>
        </div>
      </div>

      {/* Big Text */}
      <h1
        data-aos="fade-up"
        className="text-[18vw] md:text-[16vw] font-extrabold text-black/40 px-4 leading-none text-center md:text-left wrap-break-word"
      >
        Aethefield
      </h1>
    </footer>
  );
};

export default Footer;
