// hero section imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import heroOne from '/images/home/watch1/hero1.webp';
import heroTwo from '/images/home/watch1/hero2.webp';
import Button from '../common/Button';

// hero
const Hero = () => {
  const heroImages = [
    {
      img: heroOne,
      title: 'The Return Of Gold Watches',
    },
    {
      img: heroTwo,
      title: 'Fits Perfect with your suit',
    },
  ];

  return (
    <section className="AW_HERO_HEADER_2 mt-16 z-10" id="AW_HERO_HEADER_2">
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
            className="min-h-[60vh] md:min-h-[800px] mx-auto text-center bg-cover bg-no-repeat bg-center z-10 flex justify-center items-center"
            style={{ backgroundImage: `url(${item.img})` }}
            key={i}
          >
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
    </section>
  );
};

export default Hero;
