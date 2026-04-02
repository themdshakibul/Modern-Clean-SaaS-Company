import Image1 from "../../assets/Image-1.png";
import Image2 from "../../assets/Image-2.png";
import Image3 from "../../assets/Image-3.png";

const TheJournal = () => {
  return (
    <section className="overflow-hidden bg-[#fcfcfc] py-24">
      <div className="container mx-auto px-4">
        {/* Cabeçalho Minimalista */}
        <header className="mb-16 text-center" data-aos="fade-up">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
            Insights & Thoughts
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            From the{" "}
            <span className="font-serif italic text-emerald-900">journal</span>
          </h2>
        </header>

        <div className="mx-auto max-w-4xl">
          {/* Card 1 */}
          <article data-aos="fade-up" data-aos-delay="100">
            <hr className="border-gray-200" />
            <div className="group flex flex-col md:flex-row items-center gap-8 py-10 transition-all duration-500 hover:bg-gray-50/50 rounded-xl px-4 md:px-6">
              <div className="w-full md:w-48 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                <img
                  src={Image1}
                  alt="Sustainability"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-3 flex items-center justify-center md:justify-start gap-3 text-[11px] font-bold uppercase tracking-widest text-emerald-600">
                  <span>Strategy</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                  <span className="text-gray-400 font-medium">7 min read</span>
                </div>
                <h3 className="cursor-pointer text-2xl font-semibold leading-snug text-gray-800 transition-colors group-hover:text-emerald-700">
                  Sustainability Isn't a Side Project: Making Impact Operational
                </h3>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article data-aos="fade-up" data-aos-delay="200">
            <hr className="border-gray-200" />
            <div className="group flex flex-col md:flex-row items-center gap-8 py-10 transition-all duration-500 hover:bg-gray-50/50 rounded-xl px-4 md:px-6">
              <div className="w-full md:w-48 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                <img
                  src={Image2}
                  alt="Innovation"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-3 flex items-center justify-center md:justify-start gap-3 text-[11px] font-bold uppercase tracking-widest text-emerald-600">
                  <span>Innovation</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                  <span className="text-gray-400 font-medium">5 min read</span>
                </div>
                <h3 className="cursor-pointer text-2xl font-semibold leading-snug text-gray-800 transition-colors group-hover:text-emerald-700">
                  The Future of Tech in Environmental Conservation
                </h3>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article data-aos="fade-up" data-aos-delay="300">
            <hr className="border-gray-200" />
            <div className="group flex flex-col md:flex-row items-center gap-8 py-10 transition-all duration-500 hover:bg-gray-50/50 rounded-xl px-4 md:px-6">
              <div className="w-full md:w-48 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                <img
                  src={Image3}
                  alt="Design"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-3 flex items-center justify-center md:justify-start gap-3 text-[11px] font-bold uppercase tracking-widest text-emerald-600">
                  <span>Design</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                  <span className="text-gray-400 font-medium">12 min read</span>
                </div>
                <h3 className="cursor-pointer text-2xl font-semibold leading-snug text-gray-800 transition-colors group-hover:text-emerald-700">
                  How Visual Storytelling Can Drive Climate Action
                </h3>
              </div>
            </div>
          </article>

          <hr className="border-gray-200 mb-12" />
        </div>

        {/* Botão Centralizado */}
        <div className="flex justify-center" data-aos="fade-up">
          <button className="px-10 py-4 rounded-full bg-black text-white text-sm font-bold uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer active:scale-95">
            View all articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheJournal;
