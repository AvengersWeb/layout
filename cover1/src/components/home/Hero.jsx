import { useEffect, useState } from 'react';
import heroBg from '/images/home/cover1/hero-bg.webp';
import heroBg2 from '/images/home/cover1/hero-bg2.webp';
import Button from '../common/Button';

const dummyData = [
  {
    featured_image: heroBg,
  },
  {
    featured_image: heroBg2,
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active === dummyData.length - 1) {
        setActive(0);
      } else {
        setActive((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section
      className="AW_HERO_HEADER_4 mt-16 bg-[#0D1421] min-h-[70vh] md:min-h-[750px] flex justify-center items-center relative overflow-hidden z-10"
      id="AW_HERO_HEADER_4"
    >
      <div className="p-6 py-12 md:p-12 text-center text-white font-secondary">
        <h2 className="text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-widest mb-3">
          KAIZER LARS
        </h2>
        <p className="text-xl md:text-2xl uppercase">LIVE UNCONVENTIONAL</p>
        <div className="mt-12">
          <Button />
        </div>
      </div>

      {dummyData?.map((product, i) => (
        <img
          src={product.featured_image}
          alt=""
          key={i}
          className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover -z-10 ${
            active === i ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </section>
  );
};

export default Hero;
