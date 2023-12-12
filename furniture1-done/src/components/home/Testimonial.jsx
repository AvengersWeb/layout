// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from 'swiper/modules';

// icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import userTwo from '/images/home/users/user2.webp';
import userThree from '/images/home/users/user3.webp';
import userFour from '/images/home/users/user4.webp';
import userFive from '/images/home/users/user5.webp';

import useAuth from '../../hooks/useAuth';

const testimonials = [
  {
    comment:
      'Sleek sophistication meets precision in this timepiece. Its minimalist design complements any style, while impeccable craftsmanship ensures lasting quality. A true blend of form and function.',
    img: userTwo,
    name: 'John Doe',
    designation: 'Customer',
  },
  {
    comment:
      'Elegance redefined. This watch seamlessly merges classic charm with modern innovation. Its timeless appeal and reliable performance make it a must-have for every discerning wrist.',
    img: userThree,
    name: 'Jane Bope',
    designation: 'Customer',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique, iure facere, qui ut vero numquam quae aut mollitia inventore dolores consectetur temporibus esse quo excepturi hic vel. Corrupti exercitationem rem facere distinctio quibusdam placeat ratione ut accusamus fugit neque.',
    img: userFour,
    name: 'Saad Hasan',
    designation: 'Customer',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique, iure facere, qui ut vero numquam quae aut mollitia inventore dolores . Corrupti exercitationem rem facere distinctio quibusdam placeat ratione ut accusamus fugit neque.',
    img: userFive,
    name: 'Shafayetur Rahman',
    designation: 'Customer',
  },
  {
    comment:
      'Qui ut vero numquam quae aut mollitia inventore dolores consectetur temporibus esse quo excepturi hic vel. Corrupti exercitationem rem facere distinctio quibusdam placeat ratione ut accusamus fugit neque.',
    img: userTwo,
    name: 'John Doe',
    designation: 'Customer',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique, iure facere, qui ut vero numquam quae aut mollitia inventore dolores consectetur temporibus esse quo excepturi hic vel.',
    img: userFour,
    name: 'Kamal Malik',
    designation: 'Customer',
  },
];

export default function Testimonial() {
  const { language } = useAuth();

  return (
    <section className="py-20 md:py-36">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase accent-color">
            {language === 'en'
              ? 'What People Are Saying About Us'
              : 'আমাদের রিভিউ'}
          </h2>
        </div>
        {/* testimonial */}
        <div>
          <div className="flex gap-x-4 justify-center items-center">
            <button className="arrow-left">
              <FaArrowLeft size={30} />
            </button>
            <button className="arrow-right">
              <FaArrowRight size={30} />
            </button>
          </div>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="mySwiper mt-20 text-center max-w-[1500px]"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide className="max-w-[500px] p-3" key={i}>
                <div className="relative p-4 md:p-8 rounded-xl shadow-light z-50">
                  <p className="relative z-20">{item.comment}</p>
                  <div className="absolute z-[-1] -bottom-[35px] left-1/2 -translate-x-1/2 border-t-[35px] border-l-[35px] border-r-[35px] border-b-0 border-b-transparent border-l-transparent border-r-transparent border-t-teal-50" />
                </div>
                <div className="flex gap-x-4 justify-center items-center mt-11">
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-full object-cover h-14 w-14 border-teal-500 border"
                  />
                  <div>
                    <h4 className="font-medium text-lg">{item.name}</h4>
                    <p className="font-medium text-sm">{item.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
