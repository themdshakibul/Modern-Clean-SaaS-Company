import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../../assets/Image.png";

const Everything = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="container mx-auto px-6 mt-24 md:mt-40 lg:mt-52 mb-20">
      {/* Header */}
      <header
        className="mb-16 md:mb-24 mt-50 md:mt-70 lg:mt-100"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-6xl font-semibold text-center">
          Everything you need to measure, <br />
          model, and act on sustainability
        </h1>
      </header>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div data-aos="fade-right" className="relative group">
          <img
            src={Image}
            alt="Sustainability Metrics"
            className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Right Side */}
        <div className="space-y-5">
          {/* Section 01 - Track */}
          <div data-aos="fade-left" data-aos-delay="100">
            <hr className="mb-6 border-gray-300" />
            <div className="flex items-center justify-between text-2xl font-bold mb-2">
              <h2>Track</h2>
              <span className="fonts-Source text-gray-400">001</span>
            </div>
            <p className="fonts-Source text-xl text-gray-600">
              Emissions, energy, and waste across your value chain
            </p>
          </div>

          {/* Section 02 - Model */}
          <div data-aos="fade-left" data-aos-delay="300">
            <hr className="mb-6 border-gray-300" />
            <div className="flex items-center justify-between text-2xl font-bold mb-2">
              <h2>Model</h2>
              <span className="fonts-Source text-gray-400">002</span>
            </div>
            <p className="fonts-Source text-xl text-gray-600">
              Forecast performance and goal alignment
            </p>
          </div>

          {/* Section 03 - Report */}
          <div data-aos="fade-left" data-aos-delay="500">
            <hr className="mb-6 border-gray-300" />
            <div className="flex items-center justify-between text-2xl font-bold mb-2">
              <h2>Report</h2>
              <span className="fonts-Source text-gray-400">003</span>
            </div>
            <p className="fonts-Source text-xl text-gray-600">
              Generate ESG disclosures, automate frameworks
            </p>
          </div>

          {/* Section 04 - Act */}
          <div data-aos="fade-left" data-aos-delay="700">
            <hr className="mb-6 border-gray-300" />
            <div className="flex items-center justify-between text-2xl font-bold mb-2">
              <h2>Act</h2>
              <span className="fonts-Source text-gray-400">004</span>
            </div>
            <p className="fonts-Source text-xl text-gray-600">
              Surface insights and operational next steps
            </p>
            <hr className="mt-6 border-gray-300" />
          </div>

          {/* Explore Button */}
          <div data-aos="zoom-in" data-aos-delay="900" className="pt-4">
            <button className="px-10 py-4 rounded-full bg-black text-white font-semibold hover:text-black border-2 hover:bg-white cursor-pointer">
              Explore features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Everything;
