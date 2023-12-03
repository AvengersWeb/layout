import { useEffect, useState } from 'react';
import heroBg from '/images/home/watch2/hero-bg.webp';
import heroOne from '/images/home/watch2/hero1.webp';
import heroTwo from '/images/home/watch2/hero2.webp';
import heroThree from '/images/home/watch2/hero3.webp';
import Button from '../common/Button';

const dummyData = [
  {
    featured_image: heroOne,
  },
  {
    featured_image: heroTwo,
  },
  {
    featured_image: heroThree,
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
      className="AW_HERO_HEADER_4 mt-16 bg-[#0D1421] min-h-[70vh] md:min-h-[750px] flex justify-center items-center bg-cover bg-no-repeat relative overflow-hidden z-10"
      id="AW_HERO_HEADER_4"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="max-w-[600px] lg:max-w-[800px] bg-white bg-opacity-30 backdrop-blur-sm p-6 py-12 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-3">
          Your Dream Watch is in our hand!
        </h2>
        <p className="text-xl">Grab your product before you wake up!</p>
        <div className="mt-6">
          <Button />
        </div>
      </div>

      {dummyData?.map((product, i) => (
        <img
          src={product.featured_image}
          alt=""
          key={i}
          className={`absolute left-1/2 -translate-x-1/2 -bottom-12 md:-bottom-40 -z-10 ${
            active === i ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </section>
  );
};

export default Hero;
