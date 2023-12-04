import bannerOne from '/images/home/cover1/hero-bg.webp';

const Services = () => {
  return (
    <section className="py-20 md:py-28 md:min-h-[650px] bg-gray-100 relative overflow-hidden z-10">
      <div className="absolute -bottom-20 lg:bottom-0 left-1/2 -translate-x-1/2 -z-10 opacity-10 lg:opacity-100">
        <img src={bannerOne} alt="" className="max-w-[900px] h-auto" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-y-4 mx-auto text-center max-w-[800px] ">
          <h4 className="text-3xl md:text-5xl font-bold tracking-widest mb-3">
            Compatible with your favourite mobile apps.
          </h4>
          <p className="text-xl">
            Class aptent tasociosqu ad litora torquent peer inpet mauris in erat
            justo. Nullam ac urna eu felis. Cras eleifend aliquam turpis, vitae
            aliquam eros blandit vel. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit tellus, luctus!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
