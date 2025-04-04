import hero1 from "../assets/hero1.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${hero1})`, height: "100vh" }}
    >
      {/* Content Overlay */}
      <div className=" w-full h-full flex justify-center lg:justify-end items-center bg-black bg-opacity-40">
        <div className="max-w-[600px] text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Stylish Modern Clothes
          </h1>
          <p className="text-lg mb-6">
            50% off Summer Vacation. Explore our latest trends for everyone,
            curated with style and comfort.
          </p>
          <a
            href="#shop"
            className="inline-block bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
