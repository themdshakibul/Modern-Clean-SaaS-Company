import HeroImage from "../../assets/Hero-image.png";
const Header = () => {
  return (
    <>
      <section className="w-full bg-linear-to-b from-[#aad3fe] to-[#fdf3e0] flex flex-col items-center">
        {/* Content Section */}
        <div className="container mx-auto px-6 pt-24 md:pt-40 text-center flex flex-col items-center relative z-10">
          <h1
            data-aos="fade-up"
            className="text-5xl md:text-7xl lg:text-[85px] fonts-Source font-semibold"
          >
            Sustainability insights, <br />
            <span className="font-Radio">built for business</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 text-lg md:text-xl max-w-2xl text-slate-600 leading-relaxed fonts-Source"
          >
            Track impact, reduce emissions, and accelerate progress—with{" "}
            <span className="text-slate-900 font-medium">
              clarity and confidence.
            </span>
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12"
          >
            <button className="group relative px-8 py-4 bg-black text-white rounded-full font-semibold transition-all duration-300 hover:text-black hover:bg-white border-2 cursor-pointer">
              Request a demo
            </button>

            <button className="px-8 py-4 bg-white text-black rounded-full font-semibold transition-all duration-300 hover:bg-black hover:text-white border-2 cursor-pointer">
              Exoloxe the platform
            </button>
          </div>
        </div>

        {/* Image Section with AOS */}
        <div
          className="px-4 mt-12 md:mt-20 -mb-24 md:-mb-48 lg:-mb-64 relative z-20"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
        >
          <div className="relative group">
            <img
              src={HeroImage}
              alt="Hero Dashboard"
              className="relative w-full h-aut transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
