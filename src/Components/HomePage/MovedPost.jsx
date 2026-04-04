import finalImage from "../../assets/Image-final.png";

const MovedPost = () => {
  return (
    <section className="container mx-auto px-2">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div>
          <img
            src={finalImage}
            alt=""
            data-aos="zoom-in-down"
            className="rounded-md"
          />
        </div>
        <div className="space-y-10">
          <h4
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-4xl font-bold"
          >
            We finally moved past spreadsheets and guesswork. Now we have real
            data to guide real decisions.
          </h4>
          <div>
            <h5 className="text-2xl font-semibold">Elliot Williams</h5>
            <p className="text-xl">Head of Sustainability, Flux Materials</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovedPost;
