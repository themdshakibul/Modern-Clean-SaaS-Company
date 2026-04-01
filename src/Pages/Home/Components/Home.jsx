import HeroImage from "../../../assets/Hero-image.png";
function Home() {
  return (
    <>
      <section className="w-full bg-linear-to-b from-[#aad3fe] to-[#fdf3e0] flex flex-col items-center">
        {/* Content Section */}
        <div className="container mx-auto px-6 pt-20 md:pt-32 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-semibold fonts-Source">
            Sustainability insights, <br />
            <span className="font-Radio">built for business</span>
          </h1>

          <p className="fonts-Source mt-6 text-base md:text-lg max-w-2xl text-gray-700">
            Track impact, reduce emissions, and accelerate progress—with clarity
            and confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button className="btn btn-lg bg-black text-white font-medium hover:scale-105 transition-transform duration-300">
              • Request a demo
            </button>
            <button className="btn btn-lg bg-black text-white font-medium hover:scale-105 transition-transform duration-300">
              • Explore the platform
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-6xl px-4 mt-12 md:mt-20 -mb-24 md:-mb-48 lg:-mb-64">
          <img
            src={HeroImage}
            alt="Hero Dashboard"
            className="w-full h-auto shadow-2xl"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
