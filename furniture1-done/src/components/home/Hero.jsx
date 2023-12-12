// hero section imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import heroOne from '/images/home/furniture1/hero1.webp';
import heroTwo from '/images/home/furniture1/hero2.webp';
import heroThree from '/images/home/furniture1/hero3.webp';
import heroFour from '/images/home/furniture1/hero4.webp';
import heroFive from '/images/home/furniture1/hero5.webp';
import Button from '../common/Button';

// hero
const Hero = () => {
  const heroImages = [
    {
      img: heroOne,
      title: 'The Return Of Gold Watches',
    },
    {
      img: heroFour,
      title: 'Fits Perfect with your suit',
    },
    {
      img: heroFive,
      title: 'The Best Furniture For your dream home.',
    },
  ];

  return (
    <section className="AW_HERO_HEADER_3 mt-16 z-10" id="AW_HERO_HEADER_3">
      <div className="flex flex-col md:flex-row gap-1">
        <div className="relative w-full md:w-2/3 z-10">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            modules={[Navigation, Autoplay]}
            className="mySwiper relative  mx-auto z-10"
          >
            {heroImages.map((item, i) => (
              <SwiperSlide
                className="relative min-h-[60vh] md:min-h-[800px] mx-auto text-center bg-cover bg-no-repeat bg-center z-10 flex justify-center items-center"
                style={{ backgroundImage: `url(${item.img})` }}
                key={i}
              >
                <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-40 -z-10" />
                <div className="p-12 md:py-20 md:px-32 text-white">
                  <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest font-primary mb-2 ">
                    {item.title}
                  </h2>
                  <p>{`Grab your product before it's too late!`}</p>
                  <div className="mt-12">
                    <Button />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full md:w-1/3 flex flex-col sm:flex-row md:flex-col gap-1 max-h-full">
          <div
            className="relative text-center bg-cover bg-no-repeat bg-center z-10 flex justify-center items-center h-1/2 "
            style={{ backgroundImage: `url(${heroTwo})` }}
          >
            <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-40 -z-10" />
            <div className="p-12 xl:py-20 xl:px-32 text-white">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest font-primary mb-2">
                Exclusive Interior Items
              </h2>
              <p>{`Innovative forms and premium materials`}</p>
              <div className="mt-12">
                <Button />
              </div>
            </div>
          </div>

          <div
            className="relative text-center bg-cover bg-no-repeat bg-center z-10 flex justify-center items-center h-1/2"
            style={{ backgroundImage: `url(${heroThree})` }}
          >
            <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-40 -z-10" />
            <div className="p-12 xl:py-20 xl:px-32 text-white">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest font-primary mb-2">
                Exclusive Interior Items
              </h2>
              <p>{`Innovative forms and premium materials`}</p>
              <div className="mt-12">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
