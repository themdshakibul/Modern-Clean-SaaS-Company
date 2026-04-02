import { useEffect } from "react";
import { CircleArrowOutUpRight, Clock5, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import ValuesBg from "../../assets/Values-section.png";
import WhyImage from "../../assets/why.png";

const DesignedAction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section
        className="bg-cover bg-center min-h-screen flex items-center mb-30"
        style={{
          backgroundImage: `url(${ValuesBg})`,
        }}
      >
        <div className="container mx-auto px-6 py-20 lg:py-32">
          {/* Header with Animation */}
          <header
            className="flex flex-col items-center justify-center text-center mb-20"
            data-aos="fade-down"
          >
            <h1 className="font-Source font-semibold text-5xl md:text-7xl">
              Built for clarity
            </h1>
            <h1 className="text-5xl md:text-7xl font-semibold">
              Designed for action
            </h1>
          </header>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* card 1 */}
            <div
              className="card card-body bg-base-300/80 backdrop-blur-sm space-y-4 rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Clock5 size={40} className="text-primary" />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Clarity drives action</h2>
                <p className="font-Source text-lg opacity-80">
                  We believe better decisions start with better data—measured,
                  visible, and trusted.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div
              className="card card-body bg-base-300/80 backdrop-blur-sm space-y-4 rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Globe size={40} className="text-primary" />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">
                  Sustainability is a systems problem
                </h2>
                <p className="font-Source text-lg opacity-80">
                  We build tools that help teams connect the dots between
                  operations, impact, and accountability.
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div
              className="card card-body bg-base-300/80 backdrop-blur-sm space-y-4 rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <CircleArrowOutUpRight size={40} className="text-primary" />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Progress over perfection</h2>
                <p className="font-Source text-lg opacity-80">
                  We support real-world momentum—helping organizations move from
                  ambition to measurable change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-2 mb-30">
        <div className="grid md:grid-cols-2 items-center gap-5 max-w-250 mx-auto bg-base-300 p-6 rounded-lg">
          <div>
            <img src={WhyImage} alt="" />
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">
              Why Acme Inc chose Aetherfield
            </h3>
            <p className="fonts-Source font-semibold">
              With fragmented data and growing reporting pressure, Acme turned
              to Aetherfield to streamline their ESG workflows. The result?
              Faster decisions, fewer spreadsheets, and 34% more coverage.
            </p>
            <button className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:text-black border-2 hover:bg-white cursor-pointer">
              Read case study
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignedAction;
